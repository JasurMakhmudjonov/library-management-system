const { Sequelize } = require("sequelize");
const Loan = require("../../db/models/Loan");
const { BadRequestError } = require("../../shared/errors");


function returnLoan (id) {
    return Loan.findByPk(id).then((loan)=>{
        if(!loan) {
            throw new BadRequestError("Loan is not found")
        }

        if(loan.status === "closed") {
            throw new BadRequestError("Loan alredy exists")
        }

        loan.set("status", "closed");
        loan.set("dateReturned", Sequelize.fn("Now"));

        return loan.save(). then((returned) => {
            return returned;
        })

    }).catch((err) => {
        console.log("Error returning loan: ", err);
        throw err;
    })
}

module.exports = returnLoan