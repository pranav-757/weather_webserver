var path = require('path');
const hbs = require('hbs');
const express = require('express');  //returns a function

const app = express();

//node js script is wrapped inside a function which provides various functionalites
// like require(), __dirname, __filename etc
console.log(path.join( __dirname, '../public') );
console.log(__filename);
const viewPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs'); // by default express searches for views directory for templating
app.set('views', viewPath); //changes default path for views
hbs.registerPartials(partialsPath);

//set static view path
app.use(express.static(path.join( __dirname, '../public')));
app.use('/about', express.static(path.join( __dirname, '../public/about.html')));


app.get('', (req, res) => {
    //res.send('<h1>Weather</h1>');
    //its important to remove index.html file else the template isn't rendered
    //instead it keeps on picking index.html 
    res.render('index', {
        title: 'Weather App',
        name : 'Pranav'
    })
});

app.get('/weather', (req, res) => {
    if(!req.query.address) {
        return res.send({error: 'you must provide adress'});
    }

    res.send({
        forecast : 'your weather forecast',
        location : req.query.address
    });
})

app.get('/help', (req, res) => {
    // res.send([
    //     {
    //         name : "andrew",
    //         age: 20
    //     },
    //     {
    //         name : "rajesh",
    //         age: 27
    //     }
    // ]);
    res.render('help', {
        title: 'Weather App',
        pageName : 'help',
        name : 'Pranav'
    })

})

app.get('/about', (req, res) => {
    //res.send('about page');
    res.render('about', {
        title: 'Weather App',
        pageName : 'About',
        name : 'Pranav'
    })
})

app.get('/help/*', (req, res) => {
    res.render('error', {
        msg : 'Article not found'
    })
})

//this must be last as it will match all routes not defined above
app.get('*', (req, res) => {
    res.render('error', {
        msg : 'Error: 404 path you requested doesnt exist'
    })
})

//async operation
app.listen(3001, () => {
    console.log('app server started');
})