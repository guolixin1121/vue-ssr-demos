# 引入entry-client客户端js
需要打包输出两个js文件，一个bundle.server.js用于server端渲染界面，一个bundle.client.js用于传给浏览器;
bundle.client.js能保证在客户端进行无请求路由切换，跟客户端渲染一样，只有刷新页面时才到server端请求