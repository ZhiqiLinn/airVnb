'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ListingTags', [{
      listingId: 1, tagId: 1, createdAt: new Date(), updatedAt: new Date() 
      },
      {
        listingId: 1, tagId: 2, createdAt: new Date(), updatedAt: new Date() 
      },
      {
        listingId: 1, tagId: 3, createdAt: new Date(), updatedAt: new Date() 
      },
      {
        listingId: 1, tagId: 4, createdAt: new Date(), updatedAt: new Date() 
      },
      {
        listingId: 1, tagId: 5, createdAt: new Date(), updatedAt: new Date() 
      },
      {
        listingId: 2, tagId: 1, createdAt: new Date(), updatedAt: new Date() 
      },
      {
        listingId: 2, tagId: 2, createdAt: new Date(), updatedAt: new Date() 
      },
      {
        listingId: 2, tagId: 3, createdAt: new Date(), updatedAt: new Date() 
      },], {});

  
        },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ListingTags', null, {});

  }
};
