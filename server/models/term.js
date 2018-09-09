// node-todo-api/servermodels/term.js

module.exports = (sequelize, DataTypes) => {
  const Term = sequelize.define('Term', {
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    description: {
      type: DataTypes:STRING,
      allowNull: false,
   },
   example: {
      type: DataTypes.STRING,
      allowNull: true,
   },
  });

  Term.associate = (models) => {
    Term.hasOne(models.Category, {
      foreignKey: 'termId',
      as: 'categories',
   }),
    Term.hasOne(models.User, {
      foreignKey: 'termId',
      as: 'users',
    });
  };

  return Term;
};
