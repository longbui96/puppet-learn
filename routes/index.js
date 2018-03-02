import React, { Component } from "react"
import ReactDOM from "react-dom"

var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

  // Buồn ngủ quá, để tạm đây vậy
});

module.exports = router;
