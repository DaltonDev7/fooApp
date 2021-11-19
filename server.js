const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/sistemaalimentos'))

app.get('/*', ( req, res )=>{
    res.sendFile(path.join(`${__dirname}/dist/sistemaalimentos/index.html`))
})

const PORT = process.env.PORT || 3000
app.listen(PORT,()=> 'Server up!' )