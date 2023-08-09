const router = require('express').Router();

const customerController = require('../controllers/customerController');
const validationMiddleware = require('../middlewares/validationMiddleware');


router.post(
  '/customers',
  validationMiddleware.validateCustomerInput,
  customerController.createCustomer
);

module.exports = router;
