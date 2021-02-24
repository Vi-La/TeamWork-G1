import Comment from "../models/Comment";
import catchAsync from "../utils/catchAsync"
import article from '../models/Article'


export const createComment = catchAsync(async (req,res,next)=>{
const post = await article.findOne({_id: req.params.id});

    // create a comment
  const comments = new Comment();
  comments.comment = req.body.comment;
  comments.post = article._id;
  await comments.save();

    // Associating post with comments

   post.comment.push(comments.comment);
   await post.save();
   res.send(comments);
  

});
     
// Get function
      export const getComment = catchAsync(async(req,res,next)=>{
        const comments = await comment.findById(req.params.id)
                res.status(200).json({
                   status:"success",
                   comments
                
            })
        })

   

//Delete controll function
 export const deleteComment = catchAsync(async(req,res,next)=>{
     let query ={_id:req.params.id}
     const commentInfo = await comment.deleteOne(query)
     res.send ("Delete succeed")
 });
//get all function
 export const getAllComments = catchAsync(async(req,res,next)=>{

     const allComments= await article.find({})
     
     
     res.send(allComments)
 })