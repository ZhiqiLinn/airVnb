'use strict';
module.exports = (sequelize, DataTypes) => {
  const ListingTag = sequelize.define('ListingTag', {
    listingId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  ListingTag.associate = function(models) {
    ListingTag.belongsTo(models.Listing, {foreignKey: 'listingId'});
    ListingTag.belongsTo(models.Tag, {foreignKey: 'tagId'});

  };
  return ListingTag;
};