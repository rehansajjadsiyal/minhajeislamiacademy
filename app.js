const express = require('express');
const path = require('path')
const app = express();
const expressLayouts=require('express-ejs-layouts')

app.use(express.static('public'))
app.use('/ccss',express.static(__dirname+ 'public/css'))
app.use('/cjs',express.static(__dirname+ 'public/js'))


app.use('/css',express.static(path.join(__dirname+'node_modules/bootstrap/dist/css')))
app.use('/js',express.static(path.join(__dirname+'node_modules/bootstrap/dist/js')))
app.use('/jq',express.static(path.join(__dirname+'node_modules/jquery/dist')))
app.use('/fa',express.static(path.join(__dirname+'node_modules/@fortawesome/fontawesome-free/less')))
app.use(expressLayouts)
app.set('layout','./layouts/full-width')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  //console.log('Hello world received a request.');
    //const target = process.env.TARGET || 'World';
  res.render('home');
});
app.get('/contact',(req,res)=>{

});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});