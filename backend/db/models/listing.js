'use strict';
module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    userId: DataTypes.INTEGER,
    name:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256]
      }
    },
    about:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10, 1000]
      }
    },
    city:  {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state:   {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price:{
      type: DataTypes.INTEGER,
       allowNull: false,
      },
    serviceFee:{
      type: DataTypes.INTEGER,
       allowNull: false,
      },
    img1: DataTypes.STRING,
    img2: DataTypes.STRING,
    img3: DataTypes.STRING
  }, {});
  Listing.associate = function(models) {
    Listing.belongsTo(models.User, {foreignKey: 'userId'});
    Listing.hasMany(models.Booking, {
      foreignKey: 'listingId',
      onDelete: 'CASCADE', 
      hooks: true  })
  };
  return Listing;
};