const router = require('express').Router();
const { Blogpost, User, Comments } = require('../../models');

// Get all comments
router.get('/', async (req, res) => {
    try {
        const commentData = await Comments.findAll({
            include: [User, Blogpost]
        });

        res.status(200).json(commentData);
    } catch (err){
        res.status(500).json(err);
    }
});

// Create comment
router.post('/', async (req, res) => {
    try {
        const commentData = await Comments.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(commentData)
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;