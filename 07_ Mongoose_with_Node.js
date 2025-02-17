// Mongoose with Node.js – Schema, Models, Validations
    // Ab tak humne MongoDB ko direct commands se use kiya (shell/Compass me). 
    // Lekin Node.js ke saath use karne ke liye Mongoose aata hai, jo bahut easy & powerful hai.

    // Isme hum sikhenge:
        // 1️. Mongoose Kya Hai? (Aur kyu use karein?)
        // 2️. Schemas & Models (Database ka structure kaise banayein?)
        // 3️. Validation (Data insert/update hote time rules kaise lagayein?)

    //Mongoose Kya Hai? (Aur Kyu Use Karein?)
        //Mongoose ek ODM (Object Document Mapper) hai jo MongoDB ko Node.js ke saath aur easy & structured banata hai.
        
            // Schemas & Models – Database ka structure define hota hai.
            // Auto-validations – Data insert/update pe rules lag sakte hain.
            // Easier Relationships – Referencing handle karna easy hota hai.
            // Less Code, More Power – Query likhna asaan ho jata hai.
    // Mongoose ek tarah se MongoDB ke upar ek layer hai, jo kaam easy bana deti hai.

                // import mongoose from "mongoose";

                // mongoose.connect("mongodb://127.0.0.1:27017/mydatabase")
                // .then(() => console.log("MongoDB Connected Successfully!"))
                // .catch(err => console.error("MongoDB Connection Failed:", err));

                    // mongoose.connect(...) → Isse MongoDB se connection banega.
                    // "mongodb://127.0.0.1:27017/mydatabase" → Yeh MongoDB ka connection string hai:
                    // mongodb:// → Protocol hai jo batata hai ki hum MongoDB se connect ho rahe hain.
                    // 127.0.0.1 → Yeh localhost (apna computer) ka IP hai.
                    // :27017 → Yeh MongoDB ka default port hai.
                    // /mydatabase → Yeh database ka naam hai jo create hoga agar pehle se na ho.

// Mongoose Schema & Model 
    //1. Schema
        //Mongoose me Schema ek blueprint hota hai jo batata hai ki database me data ka structure kaisa hoga.

            // Kaunse fields honge? (e.g., name, email, age)
            // Unka data type kya hoga? (e.g., String, Number)
            // Koi field required hai ya optional?

    //2. Model Kya Hai?
        //Model Schema ka instance hota hai jo actual database ke saath kaam karta hai.

            // Schema sirf structure define karta hai.
            // Model CRUD operations karne deta hai (Insert, Find, Update, Delete).

     //Example :- Creating Schema and Insert user data in database
        //File Name - UserModel.js
            
            // const userSchema = new mongoose.Schema({
            //     name: String,
            //     email: String,
            //     age: Number
            // })

            // const User = mongoose.model("User",userSchema)
            // module.exports = User

                // new mongoose.Schema({...}) → Ek schema define kar raha hai jisme fields ka naam aur type diya hai.
                // name: String → name field ka type String hoga.
                // email: String → email field bhi String hogi.
                // age: Number → age field Number hogi.
                // mongoose.model("User", userSchema) →
                    // "User" → Model ka naam hai (ye "users" collection me save hoga).
                    // userSchema → Is model ka structure userSchema follow karega.
                // export User; → Ye model ko export kar raha hai taki hum ise dusre files me use kar sakein.

        // File Name - inser.js
        
            // import mongoose from "mongoose";
            // import User from "./UserModel.js"; // Apne model ko import karo

            // mongoose.connect("mongodb://127.0.0.1:27017/mydatabase")  // MongoDB se connect karo
            //   .then(() => console.log("MongoDB Connected"))
            //   .catch(err => console.error("Connection Failed:", err));

            // const newUser = new User({        // New user create karo
            //   name: "Rahul Kumar",
            //   email: "rahul@example.com",
            //   age: 25
            // });

            // // Database me save karo
            // newUser.save()         //Database me save kiya using .save().
            //   .then(() => console.log("User Saved Successfully!"))
            //   .catch(err => console.error("Error Saving User:", err));   

     //How to Find data.
            // User.find()
            // .then(users => console.log("Users Found:", users))
            // .catch(err => console.error("Error Finding Users:", err));

                // User.find() → Ye sare users return karega jo database me hain.

        //How to find specific data
            // const userId = "60d71b2f5e4d3f2a4d08a8b8"; // Example ID (change karo apni ID se)
            // User.findById(userId)
            // .then(user => console.log("User Found:", user))
            // .catch(err => console.error("Error Finding User:", err));

                // User.findById(userId) → Ye specific user ko find karega jo userId se match karega.

     //How to Update (Modify Data)
            // const userId = "60d71b2f5e4d3f2a4d08a8b8"; // Example ID
            // User.findByIdAndUpdate(userId, { age: 30 }, { new: true })
            //   .then(updatedUser => console.log("Updated User:", updatedUser))
            //   .catch(err => console.error("Error:", err));

                // findByIdAndUpdate(id, updateData) → Specific user ko update karega.
                // { new: true } → Update ke baad naya document return karega.

     //How to Delete (Remove Data)
            // const userId = "60d71b2f5e4d3f2a4d08a8b8"; // Example ID
            // User.findByIdAndDelete(userId)
            // .then(() => console.log("User Deleted"))
            // .catch(err => console.error("Error:", err));

    //3. Validations
        //Mongoose provides validations like:
            
            // required: Field required hai ya nahi.
            // min/max: Field ka minimum aur maximum value kya hona chahiye.
            // unique: Field unique hona chahiye.
            // enum: Enum types bhi set kar sakte hain (for fixed options).