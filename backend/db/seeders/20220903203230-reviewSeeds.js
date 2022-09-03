'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [{
      title: 'Great Place',
      content: 'THIS IS A GREAT PLACE!!!!',
      rating: 3,
      userId: 1,
      listingId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});

  }
};
