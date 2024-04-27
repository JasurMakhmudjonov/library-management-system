const { DataTypes } = require("sequelize");
const db = require("..");

const Category = db.define(
  "category",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
  },
  {
    tableName: "categories",
    timestamps: true,
  }
);

Category.hasMany(Category, { foreignKey: "parentId" });
Category.belongsTo(Category, { foreignKey: "parentId" });

module.exports = Category;
