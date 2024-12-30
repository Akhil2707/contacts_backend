const express = require('express');
const router = express.Router();
const {getContact,createContact,deleteContact,putContact,getContactId} =require('../controllers/contactController')



router.route('/').get(getContact).post(createContact)

router.route('/:id').put(putContact)

router.route('/:id').delete(deleteContact)

router.route('/:id').get(getContactId)

module.exports = router;