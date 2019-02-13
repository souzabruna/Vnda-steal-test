var express = require('express')
var app = express()
app.get('/', function (req, res) {
   res.sendfile('index.html');
})

app.use(express.static('src'))
 
app.listen(3000, function () {
  console.log('Servidor rodando na porta 3000 =D');
});

