'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    content: DataTypes.STRING,
    cleanliness:DataTypes.INTEGER,
    communication:DataTypes.INTEGER,
    checkIn:DataTypes.INTEGER,
    Accuracy:DataTypes.INTEGER,
    Location:DataTypes.INTEGER,
    Value:DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    listingId: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, {foreignKey: 'userId'});
    Review.belongsTo(models.Listing, {foreignKey:'listingId'})
    
  };
  return Review;
};