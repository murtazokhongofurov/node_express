const { Schema, model} = require('mongoose')

const userModel = new Schema({
    fullname: {
        type: String,
        required: true,
        minlength: 2
    },
    email: {
        type: String,
        required: true
    },
    profile_photo: {
        type: String,
    }
})

module.exports = model('User', userModel);