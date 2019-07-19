const express = require('express');
const router  = express.Router();
const Student = require('../models/Student');


/* GET home page */
router.get('/martha', (req, res, next) => {
  res.render('martha');
});

router.get('/horacio', (req,res,next) => {
  res.render('horacio')
})

router.post('/newStudent', ( req,res,next ) => {
  let { name, age } = req.body;
  // let name = req.body.name;
  Student.create( req.body )
  .then( resp => {
    console.log( resp );
    console.log('Chido');
  })
  .catch( err => {
    console.log( err );
  })
  res.send('Chidisimo')
});

router.get('/allStudents', ( req,res,next ) => {
  Student.find({})
  .then( resp => {
    res.render('all', { resp })
  })
  .catch( err => {
    console.log( err );
  })
})

router.get('/:id', ( req,res,next ) => {
  let { id, name } = req.params;
  
  Student.findOne({ _id: id})
  .then( student => {
    res.render('student', {student})
  })
  .catch( err => console.log( err ))
})



module.exports = router;
