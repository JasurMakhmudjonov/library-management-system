const { DataTypes } = require("sequelize");
const db = require("..");

const Author = db.define(
    "author",
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
        tableName: "authors",
        timestamps: true,
    }
)

module.exports = Author;
