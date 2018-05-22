module.exports = function(tableHtml, port) {
  return `
  <style>
  td, th{
    padding:5px;
    min-width: 50px;
    text-align: center;
  }
  </style>
  <h2>使用方法</h2>

  <p> 
    对Api “http://127.0.0.1:${port}/api/query” 发起 "post" 请求,参数如下:    
  </p>

  <table border="1" cellspacing="0" cellpadding="0">
      <tr>
        <th>参数名</th>
        <th>描述</th>
      </tr>
      <tr>
        <td>sql</td>
        <td>需要查询的 sql 语句</td>
      </tr>
    </table>

  <h3>Jquery 示例</h3>
  <pre>
    $.post('http://127.0.0.1:${port}/api/query', {sql: 'show tables'}, function(res){
      console.log(res)
    })
  </pre>
  <h2>数据表如下</h2>
  <table border="1" cellspacing="0" cellpadding="0">
  ${tableHtml}
  </table>
  `;
};
