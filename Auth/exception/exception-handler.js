// const { response } = require("express");

// new function handleException(err) {
//     if(err.name == "MongoError" && err.message.includes('duplicate key')){
//         return response.status(403).send({code: 403, message: "Cannot insert duplicated emails on database", date: new Date().toISOString()});
//     }else{
//         return response.status(500).send({code: 500, message: "Generic error from api", date: new Date().toISOString()});
//     }
// };

// module.exports = handleException;
