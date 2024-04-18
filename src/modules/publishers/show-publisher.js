const { NotFoundError } = require("../../shared/errors")

function showPublisher() {
   return Publisher.findByPk(id).then(publisher =>{
        if(!publisher){
            throw new NotFoundError("Publisher is not found")
        }
        return publisher;

    })
}

module.exports = showPublisher;