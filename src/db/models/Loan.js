const { DataTypes } = require("sequelize");
const db = require("..");
const Borrower = require("./Borrower");
const BookCopy = require("./BookCopy")

const Loan = db.define(
  "loan",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    dateBorrowed: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    dateReturned: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("loaned", "pending", "closed"),
      defaultValue: "loaned",
    },
  },
  {
    tableName: "loans",
    timestamps: false,
  }
);

Borrower.hasMany(Loan, { foreignKey: "borrowerId" }),
Loan.belongsTo(Borrower, { foreignKey: "borrowerId" });

BookCopy.hasMany(Loan, { foreignKey: "bookCopyId" }),
Loan.belongsTo(BookCopy, { foreignKey: "bookCopyId" });

module.exports = Loan;
