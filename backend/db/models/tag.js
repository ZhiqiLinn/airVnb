'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    tagType: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 50]
      }
    },
  }, {});
  Tag.associate = function(models) {
    Tag.belongsToMany(models.Listing, {
      through: 'ListingTag',
      foreignKey: 'tagId',
      otherKey: 'listingId'
    });
    
  };
  return Tag;
};
