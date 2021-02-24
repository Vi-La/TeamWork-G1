import validator from "validator";
import mongoose from "mongoose";

const Schema = mongoose.Schema
 const commentSchema = new mongoose.Schema({

    commentId:{
        type:String,
        required:false
    },
        
    authorId:{
         type: Schema.Types.ObjectId, ref: 'User' },
    
    comment:{
        type:String,
        required:true
    },
    articleIds:{
        type:Schema.Types.ObjectId, ref:'article'},

        created_at: Date
    
    //{timestamps:{createdAt: 'created_at'}},      
    
    });

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
 