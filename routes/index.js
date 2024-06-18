const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', async (req, res) => {
    const posts = await Post.find();
    res.render('index', { posts });
});


router.get('/posts/new', (req, res) => {
    res.render('new-post');
});


router.post('/posts', async (req, res) => {
    const { title, content } = req.body;
    const post = new Post({ title, content });
    await post.save();
    res.redirect('/');
});

// Route to view a single post
router.get('/posts/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    res.render('post', { post });
});

module.exports = router;
