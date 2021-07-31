const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');



const db = require('./database/connection');
const studentRoute = require('./routes/student.route')

// Connecting mongoDB Database
db.connection(); 

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());



// Express Route
app.use('/students', studentRoute);


// PORT
const port = process.env.PORT || 2021;
app.listen(port, () => {
  console.log('Connected to port ' + port)
})