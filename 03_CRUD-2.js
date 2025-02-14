//3. Update
    // Update single document:
        // db.users.updateOne({ name: "Rahul" }, { $set: { age: 26 } })
    
    // Update multiple documents:
        // db.users.updateMany({ city: "Delhi" }, { $set: { city: "Pune" } })

    // Replace document:
        // db.users.replaceOne({ name: "Amit" }, { name: "Amit", age: 32, city: "Chennai" }) 

//4. Delete
    // Single document delete:
        // db.users.deleteOne({ name: "Rahul" })

    // Multiple documents delete:
        // db.users.deleteMany({ city: "Pune" })

    // Delete all documents:
        // db.users.deleteMany({})