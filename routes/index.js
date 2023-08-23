import express from 'express';


import citiRouter from './cities.js';

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});



router.use('/cities', citiRouter)

export default router