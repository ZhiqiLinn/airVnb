'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [{
      content: '1THIS IS A GREAT PLACE!!!!',
      cleanliness:5,
      communication:5,
      checkIn:5,
      Accuracy:5,
      Location:5,
      Value:5,
      userId: 1,
      listingId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      content: '2THIS IS A GREAT PLACE!!!!',
      cleanliness:3,
      communication:3,
      checkIn:3,
      Accuracy:3,
      Location:3,
      Value:5,
      userId: 2,
      listingId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      content: '3THIS IS A GREAT PLACE!!!!',
      cleanliness:5,
      communication:5,
      checkIn:5,
      Accuracy:5,
      Location:5,
      Value:5,
      userId: 3,
      listingId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});

  }
};
