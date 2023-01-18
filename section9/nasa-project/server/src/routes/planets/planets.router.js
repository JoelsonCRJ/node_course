const express = require('express');
const app = require('../../app');
const {
    getAllPlanets
} = require('./planets.controller')

const planetsRouter = express.Router();
planetsRouter.get('/planets',getAllPlanets);

module.exports=planetsRouter;


