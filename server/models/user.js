// node-immt-api/server/models/user.js

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userId: {
      type: DataTypes.STRING(7),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    fullName: {
      type: DataTypes.String(100),
      allowNull: false;
   },
  });

  User.associate = (models) => {
    User.belongsTo(models.Term, {
      foreignKey: 'termId',
      onDelete: 'CASCADE',
    });
  };

  return User;
};
