const { 
  createStudentList, 
  getStudentsList, 
  editStudentList, 
  updateStudentsList, 
  deleteStudentList 
} = require('../controllers/student.controllers');

const express = require('express');
const router = express.Router();

router.get('/', getStudentsList);
router.post('/create-student', createStudentList);
router.get('/edit-student/:id', editStudentList);
router.put('/update-student/:id', updateStudentsList);
router.delete('/delete-student/:id', deleteStudentList);

module.exports = router;
