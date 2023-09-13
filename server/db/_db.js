const Promise = require('bluebird');
const chalk = require('chalk');
const mongoose = require('bluebird').promisifyAll(require('mongoose'));

var db = mongoose.connection.openUri(process.env.DATABASE_URI, {
//     // useMongoClient: true
    useNewUrlParser:true
});

//var db = mongoose.connect(process.env.DATABASE_URI, { useNewUrlParser: true })

// 
// const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.DATABASE_URI);
//         console.log(`Mongo db connected: ${conn.connection.host}`);
//     } catch (error) {
//         console.log(error);
//         process.exit(1);
//     }
// };

// module.exports = connectDB;

mongoose.Promise = Promise;

let startDb = new Promise(function(resolve, reject){

    console.log(chalk.yellow("Connecting to MongoDB..."));

    console.log(chalk.yellow("DATABASE_URI: ", process.env.DATABASE_URI));

    db.then(function(){
        console.log(chalk.green("CONNECTED! MongoDB ready."))
        resolve(db);

        console.log(chalk.blue(resolve(db)));




    }).catch(function(err){
        console.log(chalk.bgRed(err));
        reject(err);

    });

    // db.on("error", function(err){
    //     console.log(chalk.bgRed(err));
    //     reject(err);
    // });

    // db.on("disconnected", function (){
    //     console.log(chalk.red("DISCONNECTED from MongoDB"));
    // })
});

module.exports = startDb;
