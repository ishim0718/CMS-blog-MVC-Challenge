const { User } = require('../models');
const sequelize = require('../config/connection')

const userData = [
    {
        id: 1,
        name: "Sal",
        email: "sal@hotmail.com",
        password: "password123"
    },
    {
        id: 2,
        name: "Lernantino",
        email: "lernantino@gmail.com",
        password: "password123"
    },
    {
        id: 3,
        name: "Amiko",
        email: "amiko2k20@aol.com",
        password: "password123"
    },
];


const seedUser = async () => {
    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
};

module.exports = seedUser;
