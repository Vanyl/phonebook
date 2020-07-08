var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();
var mongoose = require('mongoose');

const { body, validationResult } = require('express-validator');

const url = 'mongodb://localhost:27017';
const dbName = 'dbPhonebook';
const MongoClient = require('mongodb').MongoClient;
var User = require("../models/user");


// ***************GET-SHOW DB***************

router.get('/', function (req, res, next) {

  User.find({}, (function (err, result) {
    if (err) throw err
    console.log(result);
    res.send(result);
  }))
});

// ***************ADD***************


router.post('/', [
  body('firstName').not().isEmpty(),
  body('lastName').not().isEmpty(),
  body('phone').not().isEmpty()
], (req,res) => {
  const err = validationResult(req);
  if (!err.isEmpty()){
    return res.status(422).json({errors : err.array()});
  }

  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var phone = req.body.phone;

  var newUser = {
    firstName: firstName, 
    lastName:lastName, 
    phone:phone
  };

  User.create(newUser, function(err, newlyCreated){
    if(err){
      console.log(err);
    } else {
      console.log(newlyCreated)
      res.redirect("/users");
    }
  })
  // res.redirect('http://localhost:3001/home');
  });


// router.post('/', function (req, res, next) {
//   // console.log(req.body);
//   var firstName = req.body.firstName;
//   var lastName = req.body.lastName;
//   var phone = req.body.phone;

//   var newUser = {
//     firstName: firstName, 
//     lastName:lastName, 
//     phone:phone
//   };

//   User.create(newUser, function(err, newlyCreated){
//     if(err){
//       console.log(err);
//     } else {
//       console.log(newlyCreated)
//       res.redirect("/users");
//     }
//   })
//   // res.redirect('http://localhost:3001/home');
// })

//NEW - show form to create new campground
router.get("/new",  function(req, res){
  res.render("users/new"); 
});

// SHOW - shows more info about one campground
router.get("/:id", function(req, res){
   //find the campground with provided ID
   User.findById(req.params.id).populate("users").exec(function(err, foundUser){
       if(err){
           console.log(err);
       } else {
           console.log(foundUser)
           //render show template with that campground
           res.render("users/show", {user: foundUser});
       }
   });
});

// EDIT USER ROUTE
router.put("/:id",function(req, res){
   // find and update the correct user
   console.log(req.params.id);
   console.log(req.body)
   User.findByIdAndUpdate(req.params.id, req.body, function(err, updatedUser){
      if(err){
          // res.redirect("/users");
         console.log(err)
      } else {
          res.send(res.statusCode);

          //redirect somewhere(show page)
          // res.redirect("/users/" + req.params.id);
      }
   });
});

// ***************DELETE***************

router.delete("/:id", function(req,res){
  User.findByIdAndRemove(req.params.id, function(err, updatedUser){
    if(err){
      // res.redirect("/users")
      return err
    } else {
      res.send(res.statusCode);
    }
  })
})

module.exports = router;