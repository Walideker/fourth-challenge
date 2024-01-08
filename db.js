const { MongoClient } = require('mongodb')

const uri = ('mongodb://127.0.0.1:27017/bikiniDb')
let dbConnection;
module.exports = {
    connectingdb: (cb) => {
        MongoClient.connect(uri)
            .then((client) => {
                dbConnection = client.db()
                return cb() 
            })
            .catch(err => {
                console.log(err);
                return cb(err)
            })
    },
    getDb: () => { }

}