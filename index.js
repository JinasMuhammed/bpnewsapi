const express = require('express');

const app = express();

const config = require('./DB');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

const PORT = Number(process.env.PORT || 5000);

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const newsRoute = require('./news.route');

mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  res => {
    console.log('Database successfully connected..');
  },
  err => {
    console.log(err);
  }
);

app.use('/', newsRoute);

app.listen(PORT, function() {
  console.log('Server is running on http://localhost:5000/');
});
