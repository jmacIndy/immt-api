// node-immt-api/server/models/category.js

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: true,
    },
  });

  Category.associate = (models) => {
    Category.hasOne(models.SubCategory, {
      foreignKey: 'categoryId',
      as: 'subCategories',
   }),
    Category.belongsTo(models.Term, {
      foreignKey: 'termId',
      onDelete: 'CASCADE',
    });
  };

  return Category;
};
