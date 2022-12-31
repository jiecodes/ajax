// 1 导入 express
const express = require('express')

// 2 创建应用对象
const app = express()

// 3 创建路由规则
// request 请求
// response 响应
app.get('/', (request, response) => {
  // 响应设置
  response.send('hello express ')
})

// 4 监听端口号启动
app.listen(8000, () => {
  console.log(' http://127.0.0.1:8000 express 启动了 8000端口号监听中 运行:node express基本使用.js')
})