const express = require('express')
const router = express.Router()
const personSchema = require('../models/personSchema')

//Create a person

router.post('/newPerson', (req, res) => {
  let newPerson = new personSchema(req.body)
  newPerson.save((err, data) => {
    err ? err : res.send('New person was added')
  });
});

// newPerson
// .save()
// .then((doc) => res.send(doc))
// .catch((err) => res.status(401).json(err.message));

// Create Many Records with model.create()

router.post('/manyPerson', (req, res) => {
  personSchema.create(req.body, (err, data) => {
    err ? console.log(err) : res.send(data)
  })
});

// Search  Database
router.get('/getAll', (req, res) => {
  personSchema.find((err, data) => {
    err ? console.log(err) : res.send(data)
  })
});

// Single Matching Document from  Database
router.get('/getOne', (req, res) => {
  personSchema.findOne({ country: 'France' }, (err, data) => {
    err ? console.log(err) : res.send(data)
    console.log(data)
  })
});

//   Search Your Database By id
router.get('/getByName/:id', (req, res) => {
  personSchema.findOne({ _id: req.params.id }, (err, data) => {
    err ? console.log(err) : res.send(data)
    console.log(data)
  })
});



//  Search Your Database By id
router.get('/getById', (req, res) => {
  personSchema.findById('61622fc29c99bc15d283fdd4', (err, data) => {
    err ? console.log(err) : res.send(data)
  })
});


//   Find, Edit, then Save

router.put('/edit', (req, res) => {
  personSchema.findById("61622fc29c99bc15d283fdd3", (err, rlt) => {
    rlt.favoriteFoods.push('hamburger')
    rlt.save()
    res.send(rlt)
  })
})




// New Updates on a Document Using model

router.put('/update', (req, res) => {
  personSchema.findOneAndUpdate({ name: "mikel" }, { age: 30 }, { new: true }, (err) => {
    err ? console.log(err) : res.send("updated");
  })
});

//!  Delete One Document Using model

router.delete('/delete', (req, res) => {
  personSchema.findByIdAndDelete("61622fc29c99bc15d283fdd0", (err) => {
    err ? console.log(err) : res.send("deleted");
  });
});

// router.delete('/delete', (res, req) => {
//   personSchema.findByIdAndRemove("61622fc29c99bc15d283fdd3")
//     .then((doc) => res.send(doc))
//     .catch((err) => res.status(401).json(err.message))

// })

// Delete Many Documents with model.remove()

router.delete('/removeMany', (req, res) => {
  personSchema.remove({ name: 'salim' }, (err) => {
    err ? console.log(err) : res.send("Many was deleted");
  });
});


//Chain Search Query Helpers 
router.get('/list', (req, res) => {
  personSchema.find({ favoriteFoods: 'pizza' })
    .sort({ name: -1 })
    .limit(2)
    .select({ age: 0, _id: 0, __v: 0 })
    .exec((err, data) => {
      err ? console.log(err) : res.send(data)
    })
})



module.exports = router

