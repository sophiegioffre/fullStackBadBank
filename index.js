const express = require('express');
const app = express();
const cors = require('cors');
const dal = require('./dal.js');

//used to serve static files from public directory
app.use(express.static('public'));
app.use(cors());

//create user account route using dal
app.get('/account/create/:name/:email/:password', (req, res) => {
  //else create user
  dal.create(req.params.name, req.params.email, req.params.password)
    .then((user) => {
      console.log(user);
      res.send(user);
    });
});

//login user route
/*
app.get('/account/login/:email/:password', (req, res) => {
  res.send({
    email: req.params.email,
    password: req.params.password
  });
});
*/

//all data route using dal
app.get('/account/all', (req, res) => {
  dal.all()
    .then((docs) => {
      console.log(docs);
      res.send(docs);
    });
});

//add listener
app.listen(3000, () => console.log('Running TieredBadBank on port 3000!'));