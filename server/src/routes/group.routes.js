const express = require('express')
const router = express.Router()
const groupController =   require('../controllers/group.controller');
// Retrieve all groups
router.get('/', groupController.findAll);
// Create a new group
router.post('/', groupController.create);
// Retrieve a single group with id
router.get('/:id', groupController.findById);
// Update a group with id
router.put('/:id', groupController.update);
// Delete a group with id
router.delete('/:id', groupController.delete);

module.exports = router
