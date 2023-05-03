const { Blogpost } = require('../models');

const blogPostData = [
  {
    title: 'Post #1',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    user_id: 1,
  },
  {
    title: 'Post #2',
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    user_id: 2,
  },
  {
    title: 'Post #3',
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    user_id: 3,
  },
];

const seedBlogPost = () => Blogpost.bulkCreate(blogPostData);

module.exports = seedBlogPost;
