import mongoose, { Document, Schema } from "mongoose";

interface IComment {
  author: string;
  content: string;
}

interface IPost extends Document {
  title: string;
  image: string;
  description: string;
  category: string;
  comments: IComment[];
}

export const postSchema = new Schema<IPost>(
  {
    title: {
      type: String,
      required: [true, "Property is required"],
    },
    image: {
      type: String,
      required: [true, "Property is required"],
    },
    description: {
      type: String,
      required: [true, "Property is required"],
    },
    category: {
      type: String,
      required: [true, "Property is required"],
    },
    comments: {
      type: [],
      required: [true, "Property is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model<IPost>("Post", postSchema);

export default Post;
