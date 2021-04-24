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
  
    const newshape= await shapeController.create(
      shape_name,
      created_by
    );
    res.status(200).send(newshape);
  } catch (error) {
    res.status(400).send(error.message);
  }
});











// update message by id
router.put('/update/:id', async (req, res) => {
  try {
    const messageid = req.params.id;
    const message_contents = req.body.message_contents;
    const message = await messageController.updateMessage(
      messageid,
      message_contents
    );
    res.status(200).send(message);
  } catch (error) {
    res.status(400).send(error.message);
  }
});


// get messages for a certain user
router.get('/find/:user', async (req, res) => {
  try {
    const user = req.params.user;
    const messages = await messageController.listUserMessages(user);
    return res.status(200).send(messages);
  } catch (error) {
    res.status(400).send(error.message);
  }
});


// find messages for receiver
router.get('/find/:receiver', async (req, res) => {
  try {
    const receiver = req.params.receiver;
    const messages = await messageController.listReceiverMessages(receiver);
    return res.status(200).send(messages);
  } catch (error) {
    res.status(400).send(error.message);
  }
});


// find messages by id
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    console.log(id);
    const messages = await messageController.getMessage(id);
    return res.status(200).send(messages);
  } catch (error) {
    res.status(400).send(error.message);
  }
});


// delete message by id
router.delete('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await messageController.deleteMessage(id);
    return res.status(200).send('deleted');
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// delete all messages
router.delete('/delete/:user', async (req, res) => {
  try {
    const user = req.params.user;
    await messageController.deleteUserMessgges(user);
    return res.status(200).send('user messages deleted');
  } catch (error) {
    res.status(400).send(error.messaage);
  }
});

module.exports = router;