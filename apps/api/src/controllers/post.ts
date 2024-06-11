import Post from "../models/post";

const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (e) {
    next(e);
  }
};

/* const getPostsByCategory = (req, res) => {
  const { category } = req.params;
  const resPosts = posts.find((p) => p.category === category);
  if(!resPosts) {
    return res.status(404).json({ msg: 'No posts in this category'})
  }
  res.status(200).json(resPosts);
}; */

const getPostById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ msg: "Post Not Found" });
    }

    res.status(200).json(post);
  } catch (e) {
    next(e);
  }
};

const createPost = async (req, res, next) => {
  try {
    const posts = await Post.find();
    const duplicate = posts.find((p) => p.title === req.body.title);
    if (duplicate) {
      return res.status(409).json({ msg: "Post mame already exists" });
    }
    const savedPost = await Post.create(req.body);
    res.status(201).json({ msg: "Post created successfully", savedPost });
  } catch (e) {
    next(e);
  }
};

/* const createComment = (req, res) => {
  const {id } = req.params;
  const { author, content } = req.body;
  if(!content) {
    return res.sttaus(400).json({ msg: 'Content is rquired' })
  }
  const newComment = {
    id: Date.now().toString(),
    author,
    content
  };
  const post = posts.find((p) => p.id === id);
  post.comments.push(newComment.id);
  res.status(201).send(newComment);
}; */

const updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    res.status(200).send({ msg: "Post updated successfully" }, post);
  } catch (e) {
    next(e);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndDelete(id);
    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.status(204).send(post);
  } catch (e) {
    next(e);
  }
};

export default {
  getPosts,
  /* getPostsByCategory, */
  getPostById,
  createPost,
  /* createComment, */
  updatePost,
  deletePost
}
