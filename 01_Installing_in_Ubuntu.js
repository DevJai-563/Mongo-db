//MongoDB Installation on Ubuntu (Latest Version)
    //Step 1: System Packages Update Karo
        //sudo apt update && sudo apt upgrade -y

    //Step 2: MongoDB Repository Add Karo
        //curl -fsSL https://pgp.mongodb.com/server-7.0.asc | sudo tee /usr/share/keyrings/mongodb-server-key.asc
        //echo "deb [signed-by=/usr/share/keyrings/mongodb-server-key.asc] https://repo.mongodb.org/apt/ubuntu $(lsb_release -cs)/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

    //Step 3: MongoDB Install Karo
        //sudo apt update
        //sudo apt install -y mongodb-org

    //Step 4: MongoDB Service Start Karo
        // sudo systemctl start mongod
        //or
        // sudo systemctl enable mongod

    //Step 5: Check Karo Ki MongoDB Chal Raha Hai
        // sudo systemctl status mongod

    // Step 6: Mongo Shell Access Karo
        // sudo apt install -y mongodb-mongosh
        // mongosh


//Commands to start MongoDB Service
    // sudo systemctl start mongod  -> Start MongoDB Service
    // sudo systemctl status mongod -> Check MongoDB Service Status
    // sudo systemctl stop mongod   -> Stop MongoDB Service
    // sudo systemctl restart mongod -> Restart MongoDB Service
    //mongosh -> Access MongoDB Shell


//Commands for MongoDB in Mongo Shell
    // show dbs    -> Show all databases
    // use <db_name> -> Switch to a database
    // db.<collection_name>.insertOne({name: "John Doe", age: 25})  -> Insert a document in a collection
    // db.<collection_name>.find()  -> Find all documents in a collection   
    // db.<collection_name>.find().pretty()    -> Find all documents in a collection in a pretty format
    // db.<collection_name>.updateOne({name: "John Doe"}, {$set: {age: 26}})    -> Update a document in a collection
    // db.<collection_name>.deleteOne({name: "John Doe"})       -> Delete a document in a collection