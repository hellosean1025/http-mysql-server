const koa = require("koa");
const koaBody = require("koa-body");
const mysql = require("mysql");
const argv = require("yargs").argv;

module.exports = function(options) {
  function query(pool, sql) {
      return new Promise((resolve, reject) => {
        pool.getConnection(function(err, connection) {
          if(err){
            err.message += '数据库连接失败'
            return reject(err)
          }
          connection.query(sql, function(error, results, fields) {
            connection.release();
            if (error) reject(error);
            resolve({
              results,
              fields
            });
          });
        });              
    });    
  }

  /**
   * config Object
   *  host: "localhost",
   *  user: "root",
   *  password: "12345678",
   *  database: "test"
   * 
   * 详细 config 配置查看 https://github.com/mysqljs/mysql#connection-options
   */

  config = {
    connectionLimit: 10,
    host: options.host || 'localhost',
    port: options.port || 3306,
    user: options.user || 'root',
    database: options.database || 'test',
    password: (options.password + '') || 'root'
  }

  const port = options.http_port || "5555";

  const pool = mysql.createPool(config);

  const app = new koa();

  app.use(
    koaBody({
      multipart: true
    })
  );

  app.use((ctx, next)=>{
    return next()
  })

  app.use(async (ctx, next) => {
    if (ctx.path.indexOf("/api/query") === 0) {
      let params = ctx.request.body;
      let sql = params.sql;
      try {
        let data = await query(pool, sql);
        return (ctx.body = data.results);
      } catch (err) {
        return (ctx.body = {
          errcode: 400,
          message: err.message
        });
      }
    }
    return await next();
  });

  app.use(async ctx => {
    let result 
    try{
      result = await query(pool, "show tables");
    }catch(err){
      return ctx.body = err.message
    }

    let tables = result.results.map(item => item.Tables_in_test);
    let tableHtml = [];
    tables.forEach((item, index) =>
      tableHtml.push(
        "<tr><td> " + (index + 1) + " </td><td>" + item + "</td></tr>"
      )
    );

    ctx.body = require('./view')(tableHtml, port);
  });

  
  app.listen(port, function() {
    process.stdout.write(
      "服务启动成功, 请访问 “http://127.0.0.1:" + port + '"\n'
    );
  });
};
