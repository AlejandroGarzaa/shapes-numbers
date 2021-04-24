const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,

        },
        password: {
            type: String,
            required: true,
        },
        shapes_created: {
            type: Number,
            default: 0,
        }
    },

);
autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin, 'User');
module.exports = mongoose.model('User', userSchema);