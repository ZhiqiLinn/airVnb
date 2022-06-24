'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Bookings', [{
        userId:"1",
        listingId:"1",
        checkIn:"2022-07-01",
        checkOut:"2022-07-02",
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Bookings', null, {});
  }
};
