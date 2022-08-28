const mongoose = require('mongoose')

let menuSchema = new mongoose.Schema({
    name: {type:String, require: true},
    icon: {type:String, require: true},
    menuUrl: {type:String, require: true},
    entryDate: {type:Date, default:Date.now}
})

let usersSchema = new mongoose.Schema({
    email: {type:String, require: true},
    pwd: {type:String, require: true},
    entryDate: {type:Date, default:Date.now}
})

