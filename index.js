  
const express = require('express');
const path = require('path');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const app = express();
const port = 1111;

app.listen(port);

app.use(express.static(path.resolve(__dirname, 'public')));
app.use('/', express.static(path.join(__dirname, 'public')));
// app.all('/api/images', (req, res) => {
//     proxy.web(req, res, {target: 'http://localhost:8080'});
// });

// app.all('/api/rooms/', (req, res) => {
//     proxy.web(req, res, {target: 'http://localhost:4000'});
// });

// app.all('/api', (req, res) => {
//     proxy.web(req, res, {target: 'http://localhost:8000'});
// });
// app.all('/api/rooms', (req, res) => {
//     proxy.web(req, res, {target: 'http://localhost:8081'});
// });