[TOC]

# react-express-webpack

## directory

```
.
├── README.md
├── client           #react client code
├── node_modules     
├── package.json     
├── public           #client public code
├── server           #server code
├── server.bundle.js #server render mode public code
├── server.js        #server entry
└── webpack          #webpack config
```



```
client
├── actions          
├── components       #木偶组件
├── constants
├── containers       #智能组件
├── index.html
├── index.js
├── index.prod.html
├── reducers
├── routes.js
├── stores
└── styles
```



## command

开发模式
```
npm start
```

生产模式
```
NODE_ENV=production npm start
```

服务端渲染模式
```
npm run start:server
```


## reference

两篇简要介绍react + redux 的文章

1. https://github.com/matthew-sun/blog/issues/19
2. https://github.com/matthew-sun/blog/issues/18


组件

1. [react router](https://github.com/reactjs/react-router)
2. ​