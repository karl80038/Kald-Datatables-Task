const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.get('/', employeeController.getEmployees);
router.get('/employees', employeeController.getEmployees);
router.get('/getAddEmployee', employeeController.getAddEmployee);
router.post('/submitData', employeeController.postAddEmployee);
router.post('/deleteEmployee', employeeController.postDeleteEmployee);

module.exports = router;