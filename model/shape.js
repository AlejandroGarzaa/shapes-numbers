const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shapeSchema = new Schema(
    {
        shape_id: {
            type: Number,
            default: 1,

        },
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
            required: true,
        }
    },

);

module.exports = mongoose.model('Shape', shapeSchema);