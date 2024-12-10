const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
// routes
const testRoute = require('./test');

// settings
app.set('port', process.env.PORT || 3000);

// Middleware para registrar la IP de cada petición
app.use((req, res, next) => {
    console.log(`IP de la solicitud: ${req.ip}`);
    next();
});

// middlewares
// app.use(morgan('dev'));

app.use(
    morgan((tokens, req, res) => {
        const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
        return [
            `IP: ${ip}`,
            tokens.method(req, res),
            tokens.url(req, res),
            tokens.status(req, res),
            `${tokens['response-time'](req, res)} ms`
        ].join(' || ');
    })
);
  
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// routes
app.use("/test", testRoute);

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});