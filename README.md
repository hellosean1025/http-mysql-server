## 安装

### 1.使用 npm 仓库安装
```
npm install -g http-mysql-server
```
### 2.使用源码 安装
```bash
#a.下载源码
#b.进入源码包、安装依赖 
npm install
#c. 链接脚本
npm link

```

## 启动服务器

mysql的用户名、密码、数据库名、数据库的地址、端口、http服务的端口 ，下面罗列的均为默认值，可以不填

```bash
http-mysql-server --user root --password 123456 --host 127.0.0.1  --database test --port 3306 --http_port 5555
#如只指定 数据库端口 其他均用默认值
http-mysql-server  --port 3306 
```

## 使用方法

启动服务器后，可对该 HTTP 服务器发起 `POST` 请求，假设服务器访问地址为 `http://127.0.0.1:5555`，那么请求地址为 `http://127.0.0.1:555/api/query`

请求参数如下:

|Name|Descrption|
|------|-------|
|sql|需要查询的 sql 语句|

## 示例

![](https://ws1.sinaimg.cn/large/006tCP9Lly1frk4kc305cj31ne0vuaec.jpg)
