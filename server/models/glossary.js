module.exports = (sequelize, DataTypes) => {
  const Glossary = sequelize.define('Glossary', {
    term: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Glossary.associate = (models) => {
     /* associations can be defined here */
  };

  return Glossary;
};
