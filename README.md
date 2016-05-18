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