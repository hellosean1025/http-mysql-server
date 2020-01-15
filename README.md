## 安装

### 1.使用 npm 仓库安装
```
npm install -g http-mysql-server
```
### 2.使用源码 安装

a.下载源码
b.进入源码包、安装依赖 
```bash
npm install
```
链接脚本

```bash
npm link

```

## 启动服务器
方法1.2 适合开发环境中使用， 关闭终端的时候node进程也会结束，方法3 使用pm2 来管理node进程，适合服务环境，终端关闭不会退出进程。

### 1.使用 npm link 的脚本文件 http-mysql-server 启动

mysql的用户名、密码、数据库名、数据库的地址、端口、http服务的端口 ，下面罗列的均为默认值，可以不填

```bash
http-mysql-server --user root --password 123456 --host 127.0.0.1  --database test --port 3306 --http_port 5555
```
#如只指定 数据库端口3316  其他均用默认值

```bash
http-mysql-server  --port 3316 
```
### 2.使用 npm run 启动 package.json 中的 scripts 中的 serve 命令启动，注意：【--】 后面的的参数 和方法1 的一样，-- 不是多余的

```bash
npm run serve -- --user root --password 123456 --host 192.168.1.104  --database hy --port 3306 --http_port 5556
```
### 3.使用 pm2 启动， 需要先全局安装 pm2 再用pm2 来启动服务，结束服务 使用pm2 stop all 或其他

```bash
# 全局安装 pm2
npm install pm2 -g   

# 启动 服务， 【--name http-mysql-server 】  是pm2 服务的名称， 【--http_port 5556】 监听端口，可以同时修改这两个，在一台服务器上启动两个服务  


pm2 start bin/http-mysql-server --name http-mysql-server  -- --user root --password 123456 --host 192.168.1.104  --database hy --port 3306 --http_port 5556

pm2 start bin/http-mysql-server --name http-mysql-server1  -- --user root --password 123456 --host 192.168.1.104  --database hy --port 3306 --http_port 5557

```


## 使用方法

启动服务器后，可对该 HTTP 服务器发起 `POST` 请求，假设服务器访问地址为 `http://127.0.0.1:5555`，那么请求地址为 `http://127.0.0.1:5555/api/query`

请求参数如下:

|Name|Descrption|
|------|-------|
|sql|需要查询的 sql 语句|

## 示例

![](https://ws1.sinaimg.cn/large/006tCP9Lly1frk4kc305cj31ne0vuaec.jpg)
