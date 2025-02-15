//Indexes & Aggregation Pipeline
    //Are powerful tools in MongoDB that can help you optimize your queries and get the results you want.
//Indexes
    //Indexes are used to speed up the process of querying data in a database.
    //Indexes are created on fields.
        //db.myData.createIndex({name:1})

    //Types of Indexes
        //Single Field Indexes
        //Compound Indexes -> db.myData.createIndex({name:1, age:1})
        //Multikey Indexes 
        //Text Indexes 
        //Hashed Indexes
        //Geospatial Indexes
        //TTL Indexes
        //Wildcard Indexes

    // To see the indexes on a collection
        //db.myData.getIndexes()

//Aggregation Pipeline
    //Aggregation Pipeline is a framework for data aggregation modeled on the concept of data processing pipelines.
    //It is a set of data processing stages.
    //filter, group aur modify
    //Each stage transforms the documents as they pass through the pipeline.
    //The output of one stage is the input of the next stage.
    //Basic Syntax
        //db.myData.aggregate([
        //  { $match: { city: "Delhi" } },                             //Stage 1 -> Filter
        //  { $group: { _id: "$city", totalPersons: { $sum: 1 } } }    //Stage 2 -> Group
        //])
    //Aggregation Pipeline Operators
        // $match -> db.myData.aggregate([{ $match: { city: "Delhi" } }]) -> Filters the documents with city: "Delhi"
        // $group -> db.myData.aggregate([{ $group: { _id: "$city", totalPersons: { $sum: 1 } } }]) -> Groups the documents by city and counts the total number of persons
        // $project -> db.myData.aggregate([{ $project: { name: 1, city: 1 } }]) -> Projects only the name and city fields
        // $sort -> db.myData.aggregate([{ $sort: { age: -1 } }]) -> Sorts the documents by age in descending order
        // $limit -> db.myData.aggregate([{ $limit: 2 }]) -> Limits the number of documents to 2
        // $skip -> db.myData.aggregate([{ $skip: 1 }]) -> Skips the first document
        // $count -> db.myData.aggregate([{ $count: "total" }]) -> Counts the total number of documents
        
//Lets see some examples
    //create a collection and insert some data

        // db.myData.insertMany([
        //     { "name": "Aman", "age": 25, "city": "Delhi" },
        //     { "name": "Rahul", "age": 30, "city": "Mumbai" },
        //     { "name": "Pooja", "age": 22, "city": "Delhi" },
        //     { "name": "Rohit", "age": 32, "city": "Mumbai" },
        //     { "name": "Rohan", "age": 28, "city": "Delhi" },
        //     { "name": "Raj", "age": 35, "city": "Mumbai" },
        //     { "name": "Riya", "age": 27, "city": "Delhi" },
        //     { "name": "Rahul", "age": 30, "city": "Mumbai" },
        //     { "name": "Pooja", "age": 22, "city": "Delhi" },
        //     { "name": "Rohit", "age": 32, "city": "Mumbai" },        
        // ])

    //Indexing
        // db.myData.createIndex({name:1},{city:1})
        // db.myData.getIndexes()

    //Aggregation Pipeline
        // db.myData.aggregate([
        //     { $match: { city: "Delhi" } },
        //     { $group: { _id: "$city", totalPersons: { $sum: 1 } } }
        //     { $project: { name: 1, city: 1 } }
        //     { $sort: { age: -1 } }
        //     ])