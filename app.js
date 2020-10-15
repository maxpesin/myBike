const express = require('express');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Connect to mongoose
mongoose.connect('mongodb://localhost/mybike')
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

// Load Vehicle Model
require('./models/Vehicle');
const Vehicle = mongoose.model('vehicle');

// Handlebars Middlewarere
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Method Override Middleware
app.use(methodOverride('_method'))

// Express Session Middleware
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
  //cookie: { secure: true }
}))

// Flash
app.use(flash());

//Global Variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
})

// Register Partials

// Serving static files in Express
app.use(express.static('assets'))

// Index Route
app.get('/', (req, res) => {
  const title = 'Welcome';
  res.render('index', {
    title: title
  });
});

// Info Route
app.get('/codeLib', (req, res) => {
  res.render('codeLib');
});

// Done Route
app.get('/done', (req, res) => {
  res.render('done');
});

// Service Route
app.get('/service', (req, res) => {
  res.render('service');
});

// Vehicle Route
app.get('/vehicle', (req, res) => {
  Vehicle.find({})
    .sort({year:'desc'})
      .then(vehicle => {
      res.render('vehicle', {
        vehicle:vehicle
      });
    });
  });

// Add Vehicle Form
app.get('/vehicle/add', (req, res) => {
  res.render('add');
});

// Edit Vehicle Form
app.get('/vehicle/edit/:id', (req, res) => {
  Vehicle.findOne({
    _id: req.params.id
  })
  .then(vehicle => {
    res.render('edit', {
      vehicle:vehicle
    });
  });
});

// View MyBike Page
app.get('/vehicle/mybike/:id', (req, res) => {
  Vehicle.findOne({
    _id: req.params.id
  })
  .then(vehicle => {
    res.render('myBike', {
      vehicle:vehicle
    });
  });
});

// Process Form
app.post('/vehicle', (req, res) => {
  let errors = [];
  if (!req.body.make){
    errors.push({text:'Please Select a Make'});
  }
  if(!req.body.model) {
    errors.push({text:'Please Select a Model'});
  }
  if(errors.length > 0){
    res.render('add', {
      errors: errors,
      make: req.body.make,
      model: req.body.model
    });
  } else {
    const newUser = {
      state: req.body.state,
      make: req.body.make,
      model: req.body.model,
      year: req.body.year,
      pic: req.body.pic
    }
    new Vehicle(newUser)
      .save()
      .then(vehicle => {
        req.flash('success_msg', 'Vehicle Added');
        res.redirect('/vehicle');
      })
  }
});

// Edit Form Process
app.put('/vehicle/:id', (req, res) => {
  Vehicle.findOne({
    _id: req.params.id
  })
  .then(vehicle => {
    // new values
    vehicle.state = req.body.state;
    vehicle.make = req.body.make;
    vehicle.model = req.body.model;
    vehicle.year = req.body.year;
    vehicle.pic = req.body.pic;
    vehicle.current = req.body.current;
    vehicle.history = req.body.history;
    vehicle.sizeFront = req.body.sizeFront;

    vehicle.save()
    .then(vehicle => {
      req.flash('success_msg', 'Vehicle Updated');
      res.redirect('/vehicle');
    })
  });
});

// Delete Vehicle
app.delete('/vehicle/:id', (req, res) => {
 Vehicle.remove({_id: req.params.id})
 .then(() => {
   req.flash('success_msg', 'Vehicle Removed');
   res.redirect('/vehicle');
   });
});

const port = 5000;

app.listen(port, () =>{
//ES5 -- app.listen(port, function() {});
  console.log(`Server started on port ${port}`)
  //ES5 -- console.log('Server started on port '+ port);
});