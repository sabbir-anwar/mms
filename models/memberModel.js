const mongoose = require('mongoose')

const memberSchema = new mongoose.Schema({
    member_id:{
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    name:{
        type: String,
        trim: true,
        required: true
    },
    address:{
        type: String,
        trim: true,
        required: true
    },
    area:{
      type: String,
      required: true
    },
    phone:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: false
    },
    image:{
        type: Object,
        required: false
    },
}, {
    timestamps: true //important
})


module.exports = mongoose.model("Members", memberSchema)