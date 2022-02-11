const router = require('express').Router();
let Education = require('../models/education.model');

router.route('/').get(async (req, res) => {
  try {
    const educations = await Education.find();
    res.json(educations);
  } catch(err) {
    res.status(400).json(`Error: ${err}`);
  }
})

router.route('/add').post((req, res) => {
  const yearStart = req.body.yearStart;
  const yearFinish = req.body.yearFinish;
  const title = req.body.title;
  const description = req.body.description;

  const newEducation = new Education({ yearStart, yearFinish, title, description });

  newEducation.save()
    .then(() => res.json('Education added!'))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;