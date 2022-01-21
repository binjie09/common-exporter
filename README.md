# 10行代码写个exporter

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/binjie09/common-exporter/Docker%20Image%20CI?logo=Docker&label=docker%20build&style=flat-square)

> nodejs编写的prometheus exporter 简单，前端熟悉，适用于简单的接口开发，非常适用于BFF模式 —— Backend for frontend（服务于前端的后端）

该demo实现了k1pool的监控数据导出（prometheus exporter），以下为配置后的效果
![](https://raw.githubusercontent.com/binjie09/common-exporter/main/img/example.png)

## BFF模式学习与应用

- [为什么前端要使用BFF](#为什么前端要使用BFF)
- [一个例子](#一个例子)
- [用法](#用法)
- [License](#license)

## 为什么前端要使用BFF

Answer: 省时、省钱

当今是前后端高度分工的是到，
某些需要快速开发快速集成的项目，
前端会遇到需要整合不同网关，不同云厂商，不同产品的接口的时候，
往往依赖于后端开发人员来提供支持，
为此我们要付出后端与前端的沟通成本，付出后端开发人员的人天，

前端应当能自己搞定这些事情

前端都能拿来当全栈

## 一个例子

不同的开源项目或者工具都需要不同的数据，比如prometheus的exporter

该项目中我们写一个简单的接口，来将k1pool的json数据返回成prometheus的exporter想要的数据

- 所有源码仅在`index.js`文件中，且仅有10行源码
- 使用Dockerfile
- 使用github Actions 将项目打包并发布

## 用法

### 本地使用和开发
```bash
npm install
npm start
```
### docker使用
```bash
docker run -p 3000:3000 -d binjie09/mine-exporter
```
启动后访问 http://localhost:3000/metrics

## License

MIT © 2022 binjie09
