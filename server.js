const express = require('express');
const app = express();

let captures = [];

app.get('/', (req, res) => {
    res.send({ captures });
})

app.get('/clear', (req, res) => {
    captures = [];
    res.send({ msg: 'cleared' });
});

app.get('/save/**', (req, res) => {
    let capture = decodeURI(req.url).substring(6);
    captures.push(capture);
    res.send({ msg: capture });
});

let port = process.env.PORT || 3000;
app.listen(port, () => console.log(`[Server] Server started on port ${port}!`));
