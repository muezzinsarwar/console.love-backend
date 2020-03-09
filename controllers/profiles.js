// Consider adding proper error handling for all your routes. See Jen's tutorial: https://git.generalassemb.ly/jmeade11/mern-auth-tutorial#handling-errors-in-express-apis
const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

// Get all Profiles //
router.get('/', (req, res) => {
  // After the course is over, I'd encourage you to look into the async/await pattern for
  // handling asynchronous calls as well: https://developers.google.com/web/fundamentals/primers/async-functions
  Profile.find({}).then(profiles => {
    res.json(profiles);
  });
});

// Get profile by id
router.get('/:id', (req, res) => {
  Profile.findById(req.params.id).then(profile => res.json(profile));
});

// POST new Profile //
router.post('/', (req, res) => {
  const newProfile = req.body;
  Profile.create(newProfile).then(profile => res.json(profile));
});

// PUT edit Profile //
router.put('/:id/edit', (req, res) => {
  Profile.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  }).then(profile => res.json(profile));
});

// DELETE Profile //
router.delete('/:id', (req, res) => {
  Profile.findOneAndDelete({ _id: req.params.id }).then(profile =>
    res.json(profile)
  );
});
module.exports = router;
