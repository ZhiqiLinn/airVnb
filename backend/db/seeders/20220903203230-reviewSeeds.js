'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [{
      content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ',
      cleanliness:5,
      communication:5,
      checkIn:5,
      accuracy:5,
      location:5,
      value:5,
      userId: 1,
      listingId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      content: '2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. ',
      cleanliness:3,
      communication:3,
      checkIn:3,
      accuracy:4,
      location:3,
      value:5,
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
      accuracy:5,
      location:5,
      value:5,
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
