const { Comments } = require('../models');

const commentsData = [
  {
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    user_id: 1,
    blogpost_id: 2
  },
  {
    comment: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    user_id: 2,
    blogpost_id: 1
  },
  {
    comment: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    user_id: 3,
    blogpost_id: 2
  },
];

const seedComments = () => Comments.bulkCreate(commentsData);

module.exports = seedComments;
