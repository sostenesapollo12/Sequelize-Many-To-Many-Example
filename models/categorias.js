/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categorias', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    nome_categoria_produto: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'categorias'
  });
};
