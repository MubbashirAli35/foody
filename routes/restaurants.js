const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Restaurants = require('../models/restaurant');

const restaurantsRouter = express.Router();

restaurantsRouter.use(bodyParser.json());

restaurantsRouter.get('/', (req, res, next) => {
    Restaurants.find()
    .then((restaurants) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        return res.json(restaurants);
    }, (err) => next(err));
});

restaurantsRouter.post('/', (req, res, next) => {
    Restaurants.create(req.body)
    .then((restaurant) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(restaurant);
    }, (err) => next(err));
})

module.exports = restaurantsRouter;