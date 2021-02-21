import validator from "validator";
//import mo from "mongoose";
import mongoose from "mongoose";
import  commentSchema from '../models/Comment'
const Schema = mongoose.Schema

// let mo = require('mongoose');
// let artSchma =mo.Schema({    
//    id:{
//         type: String,
//         required: false
//     },  

//const artSchema = new mo.Schema({
    const artSchema = new mongoose.Schema({

        createdOn:{
             type: Date, 
             required: true, 
             default: Date.now 
         },
        
    title:{
        type: String,
        required: true
    },
    
    article:{
        type:String,
        required:true,
       
    },
    authorId:[{type: Schema.Types.ObjectId, ref: 'User' }],
    

    comment: [{ type:Schema.Types.ObjectId, ref: 'comment' }]
         
});
//let article = module.exports= mo.model('Article',artSchma);
const article = mongoose.model("Article", artSchema);
export default article;

