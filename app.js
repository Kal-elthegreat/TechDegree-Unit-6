const express = require('express')
const data = require('./data.json')
const app = express();


app.use('/static', express.static('public')); // serve static files
app.set('view engine', 'pug');

// routes
app.get('/',(req, res) => { // home page
    res.render('index')
})

app.get('/about',(req, res) => { // about page
    res.render('about')
    
})

app.get('/project',(req, res) => { // project pages
    res.render('project')
})



app.listen(3000, () => {
    console.log('App running on port 3000')
});



module.exports = app;