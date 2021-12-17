const express = require('express');
const path = require('path')
const app = express();




app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  //console.log('Hello world received a request.');
    //const target = process.env.TARGET || 'World';
  res.render('home');
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});