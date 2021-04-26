const Shape = require('../model/shape');
const Collection = require('../model/collection1')



const create = async (shape_name, created_by) => {
  const shape = new Shape({
    shape_name,
    created_by
  });
  return shape.save();
};

const updateShape = async (id, shape_name, modified_by) => {
  const shape = await Shape.findById(id);
  shape.shape_name = shape_name;
  shape.modified_by = modified_by;

  const updatedShape = await shape.save();
  return updatedShape;
};

const viewAllShapes = async (currentUser) => {
  const shapes = await Shape.find({ created_by: currentUser });
  return shapes;
};

const deleteShape = async (id) => {
  const shapes = await Shape.findByIdAndDelete(id);
  return shapes;
};

const viewShapeDef = async () => {
  const shapeDef = await Shape.find();
  return shapeDef;
};






// need updates

// const addMessage = async (
//   sender_username,
//   recipient_username,
//   message_contents
// ) => {
//   const sender = await User.findOne({ username: sender_username });
//   const recipient = await User.findOne({ username: recipient_username });
//   if (!sender && !recipient)
//     throw new Error('User and Recever are not registered');
//   if (!sender) throw new Error('User is not registered');
//   if (!recipient) throw new Error('Recever is not registered');

//   const message = new Message({
//     sender_username: sender_username,
//     recipient_username: recipient_username,
//     message_contents: message_contents,
//   });
//   await message.save();
//   return message;
// };



// const listReceiverMessages = async (receiver) => {
//   const messages = await Message.find({ recipient_username: receiver });
//   return messages;
// };

// const getMessage = async (id) => {
//   const message = await Message.findById(id);
//   return message;
// };







// const deleteUserMessgges = async (user) => {
//   //const message = await Message.findOneAndDelete(user);
//   const message = await Message.deleteMany({ sender_username: user });
//   return message;
// };





module.exports = { create, updateShape, viewAllShapes, deleteShape, viewShapeDef};