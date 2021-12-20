const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname,'public')));

//HTTP logger

app.use(morgan('combined'));

//template engine

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, '\\resources\\views'));


// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// console.log("PATH:", path.join(__dirname, '\\resources\\views'));
app.get('/calculator', (req, res) => {
    let output = "";
    if (req.query.hasOwnProperty('input')){
      try {
        output = eval(req.query.input);
      }
      catch(err) {
        output = err.name;
      }
    }
    
    res.render('home', {valueOutput: output});
    
    
});

app.listen(3000, () => {
    console.log(`Server is running at http://localhost:3000/calculator`)
});