import mongoose, { Document, Schema } from "mongoose";

export interface IComment extends Document {
  author: string;
  content: string;
}

export const commentSchema = new Schema<IComment>(
  {
    author: {
      type: String,
      required: [true, "Property is required",]
    },
    content: {
      type: String,
      required: [true, "property is required"]
    },
  },
  {
    /* timestamp: true */
  }
);

const Comment = mongoose.model<IComment>("Comment", commentSchema);

export default Comment;