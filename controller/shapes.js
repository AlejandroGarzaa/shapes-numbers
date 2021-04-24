const Shape = require('../model/shape');

const create = async (shape_name,created_by) => {
    
    const shape = new Shape({
      shape_name,
      created_by
    });
    return shape.save();
  };

  module.exports = { create };