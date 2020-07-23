require('@skatejs/ssr/register');
const render = require('@skatejs/ssr');
const express = require('express');
const HelloWorld = require('./HelloWorld');

const port = 3000;

const server = express();

const routes = express.Router();

routes.get("/", async (req, res) => {
    const result = await render(new HelloWorld());

    res.status(200);
    res.type("text/html;charset=UTF-8");
    res.send(result);
});

server.use(routes);

server.listen(port, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running on http://localhost:${port}`);
});
