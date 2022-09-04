'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [{
      content: '1THIS IS A GREAT PLACE!!!!',
      rating: 3,
      userId: 1,
      listingId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      content: '2THIS IS A GREAT PLACE!!!!',
      rating: 4,
      userId: 2,
      listingId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      content: '3THIS IS A GREAT PLACE!!!!',
      rating: 5,
      userId: 3,
      listingId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});

  }
};
