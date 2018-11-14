# 简介

[一步步构造自己的vue2.0+webpack环境](https://www.cnblogs.com/wj204/p/6031435.html)的示例代码。  
因为webpack4的到来，webpack.config.js中好多配置项变了，造成完全按照教程中的配置，在打包时会报错。

特此说明本示例的环境依赖
*  node(v10.13.0)
*  npm(6.4.1)

```json
// package.json
{
  "name": "vue-wkdemo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-runtime": "^5.8.38",
    "css-loader": "^1.0.1",
    "html-webpack-plugin": "^3.2.0",
    "vue-hot-reload-api": "^2.3.1",
    "vue-html-loader": "^1.2.4",
    "vue-loader": "^15.4.2",
    "vue-style-loader": "^4.1.2",
    "vue-template-compiler": "^2.5.17",
    "webpack": "^4.25.1",
    "webpack-cli": "^3.1.2",
    "webpack-dev-server": "^3.1.10"
  },
  "dependencies": {
    "vue": "^2.5.17"
  }
}

```

## 运行
打开命令行，进入vue-wkdemo-01
```
cd vue-wkdemo-01
```

安装依赖
```
$ npm install
```

使用webpack打包
```
$ webpack --display-modules --display-chunks --config build/webpack.config.js
```

运行output/index.html
