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
      },{
        userId:"1",
        listingId:"1",
        checkIn:"2022-07-01",
        checkOut:"2022-07-02",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId:"1",
        listingId:"3",
        checkIn:"2022-07-01",
        checkOut:"2022-07-02",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId:"1",
        listingId:"4",
        checkIn:"2022-07-01",
        checkOut:"2022-07-02",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId:"1",
        listingId:"5",
        checkIn:"2022-07-01",
        checkOut:"2022-07-02",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId:"2",
        listingId:"1",
        checkIn:"2022-08-01",
        checkOut:"2022-08-02",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId:"3",
        listingId:"3",
        checkIn:"2022-08-01",
        checkOut:"2022-08-02",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId:"1",
        listingId:"1",
        checkIn:"2022-07-01",
        checkOut:"2022-07-02",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId:"1",
        listingId:"1",
        checkIn:"2022-07-01",
        checkOut:"2022-07-02",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId:"1",
        listingId:"3",
        checkIn:"2022-07-01",
        checkOut:"2022-07-02",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId:"1",
        listingId:"4",
        checkIn:"2022-07-01",
        checkOut:"2022-07-02",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId:"1",
        listingId:"5",
        checkIn:"2022-07-01",
        checkOut:"2022-07-02",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId:"2",
        listingId:"1",
        checkIn:"2022-08-01",
        checkOut:"2022-08-02",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId:"3",
        listingId:"3",
        checkIn:"2022-08-01",
        checkOut:"2022-08-02",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
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
