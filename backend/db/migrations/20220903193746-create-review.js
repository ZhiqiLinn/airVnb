'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reviews', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        allowNull: false,        
        type: Sequelize.STRING(500)
      },
      cleanliness: {
        allowNull: false,        
        type: Sequelize.INTEGER
      },
      communication: {
        allowNull: false,        
        type: Sequelize.INTEGER
      },
      checkIn: {
        allowNull: false,        
        type: Sequelize.INTEGER
      },
      accuracy: {
        allowNull: false,        
        type: Sequelize.INTEGER
      },
      location: {
        allowNull: false,        
        type: Sequelize.INTEGER
      },
      value: {
        allowNull: false,        
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,        
        type: Sequelize.INTEGER
      },
      listingId: {
        allowNull: false,        
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Reviews');
  }
};