const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const Schema = mongoose.Schema;

const shapeSchema = new Schema(
    {
        // shape_id: {
        //     type: Number,
        //     default: 1,

        // },
        shape_name: {
            type: String,
            required: true,
        },
        created_by: {
            type: String,
            required: true,
        },
        modified_by: {
            type: String,
        
        }
    },

);
autoIncrement.initialize(mongoose.connection);
shapeSchema.plugin(autoIncrement.plugin, 'Shape');
module.exports = mongoose.model('Shape', shapeSchema);