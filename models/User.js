const mongoose =  require('mongoose');
 
const Schema = mongoose.Schema({
    username : {
        type :  String,
        require :  true,
        min : 5,
        max : 20,
        unique : true
    },
    email :{
        type :  String,
        require :  true,
        max : 50,
        unique : true
    },
    password :{
        type :  String,
        require :  true,
        min : 8
    },
    profilePicture : {
        type : String,
        default : ""
    },
    coverPicture : {
        type : String,
        default : ""
    },
    followers :{
        type:Array,
        default : []
    },
    followings :{
        type:Array,
        default : []
    },
    isAdmin : {
        type : Boolean,
        default : false
    },
    desc : {
        type : String,
        max : 50
    },
    city : {
        type : String,
        max : 50
    },
    from : {
        type : String,
        max : 50
    },
    relationship : {
        type : Number,
        enum : [1,2,3]
    }
},{timestamps :  true});


module.exports = mongoose.model("users",Schema);