const express = require('express'); 
const router = express.Router(); 
const userController = require('../controllers/userController'); 
router 
 .route('/') 
 .get(userController.getUsers) 
// .post(userController.createNewSales); 
router 
 .route('/:id') 
 .get(userController.getcustomerbyId) 
//  .patch(userController.patchSalesById) 
//  .delete(userController.deleteSalesByID); 
module.exports = router; 
