'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    content: DataTypes.STRING,
    cleanliness:DataTypes.INTEGER,
    communication:DataTypes.INTEGER,
    checkIn:DataTypes.INTEGER,
    accuracy:DataTypes.INTEGER,
    location:DataTypes.INTEGER,
    value:DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    listingId: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, {foreignKey: 'userId'});
    Review.belongsTo(models.Listing, {foreignKey:'listingId'})
    
  };
  return Review;
};