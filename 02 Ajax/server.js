// 1 导入 express
const { json } = require('express')
const express = require('express')

// 2 创建应用对象
const app = express()

// 3 创建路由规则
// request 请求
// response 响应
app.get('/server', (request, response) => {
  // 设置响应头 不允许跨域
  response.setHeader('Access-Control-Allow-Origin','*')
  // 响应设置
  response.send('hello ajax ')
})
app.post('/server', (request, response) => {
  // 设置响应头 不允许跨域
  response.setHeader('Access-Control-Allow-Origin','*')
  // 设置 自定义 请求头参数
  response.setHeader('Access-Control-Allow-Headers','*')
  // 响应设置
  response.send('hello ajax post')
})
// all 可以接收任何请求类型
app.all('/server', (request, response) => {
  // 设置响应头 不允许跨域
  response.setHeader('Access-Control-Allow-Origin','*')
  // 设置 自定义 请求头参数
  response.setHeader('Access-Control-Allow-Headers','*')
  // 响应设置
  response.send('hello ajax post')
})
app.all('/json-server', (request, response) => {
  // 设置响应头 不允许跨域
  response.setHeader('Access-Control-Allow-Origin','*')
  // 设置 自定义 请求头参数     前端代码 xhr.setRequestHeader('name', 'hello')
  response.setHeader('Access-Control-Allow-Headers','*')
  // 响应数据
  const data = {
    name: 'nihao',
    age: 12,
  }
  // 将JS对象转换为JSON字符串    也可以深拷贝
  const str = JSON.stringify(data);
  // 响应设置   
  response.send(str) 
})
// 网络超时
app.all('/delay', (request, response) => {
  // 设置响应头 不允许跨域
  response.setHeader('Access-Control-Allow-Origin','*')
  // 设置 自定义 请求头参数     前端代码 xhr.setRequestHeader('name', 'hello')
  response.setHeader('Access-Control-Allow-Headers','*')
  setTimeout(() => {
    // 响应设置   
    response.send('网络超时 2秒响应') 
  }, 2000);
})
// jquery 发送请求
app.all('/jquery-server', (request, response) => {
  // 设置响应头 不允许跨域
  response.setHeader('Access-Control-Allow-Origin','*')
  // 设置 自定义 请求头参数     前端代码 xhr.setRequestHeader('name', 'hello')
  response.setHeader('Access-Control-Allow-Headers','*')
  // 响应设置   
  const data = {name: 'andy'}
  // response.send('jquery Ajax') 
  // 对象转换为字符串
  response.send(JSON.stringify(data))
})
// axios 发送请求
app.all('/axios-server', (request, response) => {
  // 设置响应头 不允许跨域
  response.setHeader('Access-Control-Allow-Origin','*')
  // 设置 自定义 请求头参数     前端代码 xhr.setRequestHeader('name', 'hello')
  response.setHeader('Access-Control-Allow-Headers','*')
  // 响应设置   
  const data = {name: 'andy'}
  // response.send('jquery Ajax') 
  // 对象转换为字符串
  response.send(JSON.stringify(data))
})
// fetch 发送请求
app.all('/fetch-server', (request, response) => {
  // 设置响应头 不允许跨域
  response.setHeader('Access-Control-Allow-Origin','*')
  // 设置 自定义 请求头参数     前端代码 xhr.setRequestHeader('name', 'hello')
  response.setHeader('Access-Control-Allow-Headers','*')
  // 响应设置   
  const data = {name: 'andy'}
  // response.send('jquery Ajax') 
  // 对象转换为字符串
  response.send(JSON.stringify(data))
})
// jsonp 解决跨域 发送请求
app.all('/jsonp-server', (request, response) => {
  // response.send('console.log("jsonp")')
  // 响应设置   
  const data = {name: 'andy'}
  // response.send('jquery Ajax') 
  // 对象转换为字符串
  response.send(`handle(${JSON.stringify(data)})`)
})
// jsonp 检测用户名是否存在
app.all('/input-server', (request, response) => {
  // response.send('console.log("jsonp")')
  // 响应设置   
  const data = { exist: 1, msg: '用户名存在',}
  // response.send('jquery Ajax') 
  // 对象转换为字符串
  response.send(`handle(${JSON.stringify(data)})`)
})
// jquery发送 jsonp请求
app.all('/jquery-jsonp-server', (request, response) => {
  // response.send('console.log("jsonp")')
  // 响应设置   
  const data = { name: 'andy', age: 20}
  // response.send('jquery Ajax') 
  // 对象转换为字符串
  let str = JSON.stringify(data)
  // 回调 请求.查询
  let callback = request.query.callback
  response.send(`${callback}(${str})`)
})

// 4 监听端口号启动
app.listen(8000, () => {
  console.log(' http://127.0.0.1:8000/server express 启动了 8000端口号监听中 运行:node server.js')
})


