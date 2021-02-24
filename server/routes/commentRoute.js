import express from "express";
import * as commentControl from "../controllers/commentController";
import comment from "../models/Comment";
import * as authControl from "../controllers/AuthController"
import article from "../models/Article";

const commentRoute = express.Router()

 commentRoute.route("/:id")
                   .delete(commentControl.deleteComment)
                   .get(commentControl.getComment)
                   //.get(authControl.protect, commentControl.getAllArticles)
commentRoute.route("/post/:id/comments")
                   .post(commentControl.createComment)
                   

                    export default commentRoute;


                 