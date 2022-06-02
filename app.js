require('dotenv').config({path:__dirname+'/.env'})
const express = require('express');
const hbs = require('hbs');


const app = express();
const port = process.env.PORT;

console.log(process.env.port);
// handlebar para cuando no se usa react ni nada hacerlo semi dinamico y reutilizar codigo
//handlebart utiliza vmc (Vista modelo compilador)
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
/*
    NOTA: Los headersa son los componentes para reutilizar desde el backeend
*/


// Middleware static content
app.use(express.static('public'));



//renderizar paginas para usar hbs:

//controlador:
app.get('/',(req,res)=>{
    res.render('home',{
        //argumento
        name: 'Hugo',
        title: 'curso node'
    });
})
app.get('/generic',(req,res)=>{
    res.render('generic',{
        //argumento
        name: 'Hugo',
        title: 'curso node'
    });
})
app.get('/elements',(req,res)=>{
    res.render('elements',{
        //argumento
        name: 'Hugo',
        title: 'curso node'
    });
})


// app.get('/generic', function(req, res) { //use generic without .html
//     res.sendFile(__dirname+'/public/generic.html');
// });
// app.get('/elements', function(req, res) { //use generic without .html
//     res.sendFile(__dirname+'/public/elements.html');
// });


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  