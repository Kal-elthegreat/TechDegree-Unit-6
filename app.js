const express = require('express')
const data = require('./data.json')
const bodyParser = require('body-parser')
const app = express();

const projects  = data.projects;

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/static', express.static('public')); // serve static files
app.set('view engine', 'pug');


// routes
app.get('/',(req, res) => { // home page
    res.render('index', { projects })
})

app.get('/about',(req, res) => { // about page
    res.render('about')   
})

app.get('/project:id',(req, res) => { // project pages
    res.render('project', { projects, id : req.params.id })
})

app.use((req, res, next) => {
    const err = new Error('Oops you seem to have wandered off!');
    err.status = 404;
    next(err); 
})

app.use((err, req, res, next) => { 
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
});

app.listen(3000, () => {
    console.log('App running on port 3000')
});

module.exports = app;