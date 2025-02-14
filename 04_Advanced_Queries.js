// Advanced Queries – Filters, Sorting, Projection, Pagination, Limiting, and Counting
    //First Insert the data in the collection:
        // db.myData.insertMany([
        //     { "name": "Aman", "age": 25, "city": "Delhi" },
        //     { "name": "Rahul", "age": 30, "city": "Mumbai" },
        //     { "name": "Pooja", "age": 22, "city": "Delhi" }
        // ])

    //1. Filters
        // $eq (equal to)
        // $ne (not equal to)
        // $gt (greater than)
        // $lt (less than)
        // $in (match any from a list)
        // $nin (not in list)
        // $gte, $lte → Price filtering in e-commerce
        // $or, $and → Multiple conditions apply karne ke liye
        // $not → Specific users ya products exclude karne ke liye
        // $exists → Kabhi kabhi kuch fields missing hoti hain, toh unhe dhoondhne ke liye
        // $type → Agar kisi field ka type galti se string ya number me mix ho gaya ho toh usko filter karne ke liye

            // db.myData.find({city:{$ne:"Delhi"}, age:{$gt:25}})  //its Rahul
            // db.myData.find({city:{$in:["Delhi","Mumbai"]}})    //its Aman, Rahul, Pooja
            // db.myData.find({city:{$nin:["Delhi","Mumbai"]}})  //its no one

    //2. Sorting
        // 1 for ascending order and -1 for descending order
            // db.myData.find().sort({age:1})  //ascending order
            // db.myData.find().sort({age:-1})  //descending order

        // Multiple Fields Sorting
            // db.myData.find().sort({age:1, name:1})  //ascending order of age and name
    
    //3. Projection
        // Only show the name and city fields
            // db.myData.find({}, {name:1, city:1})

        // Exclude the age field
            // db.myData.find({}, {age:0})

    //4. Pagination
        // Limit the number of documents returned
            // db.myData.find().limit(2)

        // Skip a number of documents
            // db.myData.find().skip(1)

        // Limit and Skip together
            // db.myData.find().limit(2).skip(1)

    //5. Counting
        // Count the number of documents
            // db.myData.find().count() -> 3

        // Count the number of documents with a specific condition
            // db.myData.find({city: "Delhi"}).count() -> 2