'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tags', [
      {
      tagType: 'Lakefront', createdAt: new Date(), updatedAt: new Date() 
      },
      {
      tagType: 'Beach', createdAt: new Date(), updatedAt: new Date() 
      },
      {
      tagType: 'Tiny homes', createdAt: new Date(), updatedAt: new Date() 
      },
      {
      tagType: 'Camping', createdAt: new Date(), updatedAt: new Date() 
      },
      {
      tagType: 'Cabins', createdAt: new Date(), updatedAt: new Date() 
      },
      {
      tagType: 'Arctic', createdAt: new Date(), updatedAt: new Date() 
      },
      {
      tagType: 'Amazing', createdAt: new Date(), updatedAt: new Date() 
      },
      {
      tagType: 'Treehouses', createdAt: new Date(), updatedAt: new Date() 
      },], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tags', null, {});
  }
};
