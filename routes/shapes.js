const express = require('express');
const router = express.Router();
const shapeController = require('../controller/shapes');
const session = require('express-session');

router.use(session({ secret: 'secret', saveUninitialized: false, resave: false }));


// submit shape
router.post('/create', async (req, res) => {
  sess = req.session;
  try {
    const shape_name = req.body.shape_name;
    const created_by = sess.username;

    const newshape = await shapeController.create(
      shape_name,
      created_by
    );
    res.status(200).send(newshape);
  } catch (error) {
    res.status(400).send(error.message);
  }
});


// update shape by id
router.put('/update/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const shape_name = req.body.shape_name;
    const modified_by = req.session.username;

    const shapes = await shapeController.updateShape(
      id,
      shape_name,
      modified_by

    );
    res.status(200).send(shapes);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// view alll shapes by user

router.get('/view', async (req, res) => {
  try {
    const currentUser = req.session.username;
    const numShapes = await shapeController.viewAllShapes(currentUser);
    return res.status(200).send(numShapes);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// delete shape by id
router.delete('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await shapeController.deleteShape(id);
    return res.status(200).send('deleted');
  } catch (error) {
    res.status(400).send(error.message);
  }
});









module.exports = router;