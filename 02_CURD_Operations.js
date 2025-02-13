//CURD Operations in MongoDB
//Open MongoDB Compass and connect to the server

    // MongoDB Shell Open Karo
        // mongosh
    
    // Database Commands
        // show dbs (Default databases: admin, config, local)

    // New database create aur use karna:
        // use mydatabase

    // Collection Commands
        // db.createCollection("users")

    // Show all collections:
        // db.getCollectionNames()


//1. Create Operation(Insert Data)
    // Single document insert karna:
        // db.users.insertOne({ name: "Rahul", age: 25, city: "Delhi" })

    // Multiple documents insert karna:
        // db.users.insertMany([
        //   { name: "Amit", age: 30, city: "Mumbai" },
        //   { name: "Priya", age: 22, city: "Bangalore" }
        // ])

//2. Read Operation(Query)
    // Show all documents:
        // db.users.find()

    // Pretty format me data dekhna:
        // db.users.find().pretty() 
    
    // Specific condition se data fetch karna:
        // db.users.find({ city: "Delhi" })

    //in operator se data fetch karna:
        // db.users.find({ city: { $in: ["Delhi", "Mumbai"] } })  -> Delhi aur Mumbai dono ka data milega

    //and operator se data fetch karna:
        // db.users.find({ city: "Delhi", age: {$ls: 25} }) -> Delhi me jo age 25 se kam hai uska data milega

    //or operator se data fetch karna:
        // db.users.find({ $or: [{ city: "Delhi" }, { age: 22 }] }) -> Delhi city ka ya 22 age ka data milega

    //Single document fetch karna:
        // db.users.findOne({ city: "Mumbai" }) -> Mumbai city ka first document milega