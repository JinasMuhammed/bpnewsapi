const express = require('express');

const newsRoute = express.Router();

let NewsModel = require('./news.model');

// get all news
newsRoute.route('/').get(function(req, res) {
  NewsModel.find(function(err, data) {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

// post the news
newsRoute.route('/addnews').post(function(req, res) {
  let data = new NewsModel(req.body);

  data
    .save()
    .then(x => {
      res.status(200).json({ news: 'News Added Successfully..' });
    })
    .catch(err => {
      res.status(400).send('Unable to add news..');
    });
});

// get single news info using ref id
newsRoute.route('/getone/:id').get(function(req, res) {});

// update news
newsRoute.route('/updatenews/:id').put(function(req, res) {});

// delete news
newsRoute.route('/deletenews/:id').delete(function(req, res) {});

module.exports = newsRoute;
