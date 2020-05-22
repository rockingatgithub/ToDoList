//First entry point of to-do app..
// acquiring different packages..

const express =require('express');
const app = express();
const port=8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.use(express.static('./assets'));

//extract styles and scripts..
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

//use the express-ejs-layouts..
app.use(expressLayouts);

//use the router..
app.use('/', require('./routes'));

//set up view engines..
app.set('view engine', 'ejs');
app.set('views', './views');
app.listen(port, function(err){
    if(err)
    {
        console.log(`error running server on port: ${port}`);
    }
    console.log(`Server is running on port: ${port}`);
})