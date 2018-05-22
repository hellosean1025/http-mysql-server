## 安装

```
npm install -g http-mysql-server
```

## 启动服务器

用户名、密码和服务器地址可按实际情况填写。

```bash
http-mysql-server --user root --password 123456 --host 127.0.0.1

```

## 使用方法

启动服务器后，可对该 HTTP 服务器发起 `POST` 请求，假设服务器访问地址为 `http://127.0.0.1:5555`，那么请求地址为 `http://127.0.0.1:555/api/query`

请求参数如下:

|Name|Descrption|
|------|-------|
|sql|需要查询的 sql 语句|

## 示例

![](https://ws1.sinaimg.cn/large/006tCP9Lly1frk4kc305cj31ne0vuaec.jpg)
