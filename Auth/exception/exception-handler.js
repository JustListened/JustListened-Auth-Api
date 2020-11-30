const handleException = (err, res) => {
    console.log("Error :::::")
    if(err.name == "MongoError" && err.message.includes('duplicate key')){
        console.log({
            code: 403,
            message: "DUPLICATED_EMAIL",
            description: "Cannot insert duplicated emails on database",
            date: new Date().toISOString()
        });
        return res.status(403).send({
            code: 403,
            message: "DUPLICATED_EMAIL",
            description: "Cannot insert duplicated emails on database", 
            date: new Date().toISOString()
        });
    }else{
        return res.status(500).send({
            code: 500, 
            message: "INTERNAL_SERVER_ERROR",
            description: "Generic error from api", 
            date: new Date().toISOString()
        });
    }
}

module.exports = handleException;
