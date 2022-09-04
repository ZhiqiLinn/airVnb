'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Demo',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        email: 'rena@gmail.com',
        username: 'rena',
        hashedPassword: bcrypt.hashSync('password')    
      },
      {
        email: 'jingjing@gmail.com',
        username: 'jingjing',
        hashedPassword: bcrypt.hashSync('password')    
      },
      {
        email: 'jeffery@gmail.com',
        username: 'jeffery',
        hashedPassword: bcrypt.hashSync('password')    
      },
      {
        email: 'josh@gmail.com',
        username: 'josh',
        hashedPassword: bcrypt.hashSync('password')    
      },
      {
        email: 'shane@gmail.com',
        username: 'shane',
        hashedPassword: bcrypt.hashSync('password')    
      },

      {
        email: 'rawaha@gmail.com',
        username: 'rawaha',
        hashedPassword: bcrypt.hashSync('password')    
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};