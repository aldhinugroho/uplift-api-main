const router = require('express').Router();
const fs = require('fs');
const path = require('path');

const v1 = '/api/v1';

const Auth = require('./auth.router');
const User = require('./users.router');

const notFoundMiddleware = require('../middlewares/not-found');
const handdleErrorMiddleware = require('../middlewares/handle-error');

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to api uplift',
  });
});

router.use(`${v1}/cms`, Auth);
router.use(`${v1}/cms`, User);


router.use(notFoundMiddleware);
router.use(handdleErrorMiddleware);

module.exports = router;
