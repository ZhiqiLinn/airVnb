'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    about: DataTypes.TEXT,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    price: DataTypes.INTEGER,
    serviceFee: DataTypes.INTEGER,
    img1: DataTypes.STRING,
    img2: DataTypes.STRING,
    img3: DataTypes.STRING
  }, {});
  Listing.associate = function(models) {
    Listing.belongsTo(models.User, {foreignKey: 'userId'});
    Listing.hasMany(models.Booking, {foreignKey: 'listingId'})
  };
  return Listing;
};