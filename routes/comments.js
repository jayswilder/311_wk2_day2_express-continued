const express = require('express')
const router = express.Router()
const comments = require('../data/comments');


router.get('/comments', (req, res) => res.json(comments));

router.get('/comments/:id', (req, res) => {
    const commentFound = comments.find(comment => comment._id === parseInt(req.params.id));

    if (commentFound) {
        res.json(comments.find(comment => comment._id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ Error: `No comment with the ID of ${req.params.id}` });
    }
});

let commentCounter = comments.length + 1;
let commentPostId = 1;
router.post('/comments', (req, res) => {
    const newComment = {
        postId: commentPostId,
        _id: commentCounter,
        body: req.body.body
    }

    commentCounter++
    commentPostId++
    comments.push(newComment)
    res.json(comments)
});

module.exports = router;