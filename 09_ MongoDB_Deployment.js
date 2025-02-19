// MongoDB Deployment – Atlas Cloud, Backup, Restore
    // MongoDB ko production me deploy karne ke liye 3 major cheezein hoti hain:
        // 1️⃣ MongoDB Atlas Cloud – Fully Managed Database Service
        // 2️⃣ Backup & Restore – Data Loss Se Bachne Ke Liye
        // 3️⃣ Self-Hosted Deployment – VPS/Server Pe Setup

//1️⃣ MongoDB Atlas Cloud Setup
    //MongoDB Atlas ek managed cloud database service hai jo AWS, GCP, aur Azure pe run hoti hai. 
    // Iska free tier bhi available hai (512 MB storage).

    // Step 1: MongoDB Atlas Account Banayein
    // Step 2: Free Cluster Create Karein 
    // Step 3: Database User Banayein (Security Setup)
    // Step 4: Network Access Setup (IP Whitelisting)
    // Step 5: Connection String Copy Karo (mongodb+srv://<username>:<password>@mycluster.mongodb.net/myDatabase?retryWrites=true&w=majority)
    // Step 6: Node.js Se Connect Karo

        // import mongoose from "mongoose";

        // const uri = "mongodb+srv://<username>:<password>@mycluster.mongodb.net/myDatabase?retryWrites=true&w=majority";
        
        // mongoose.connect(uri, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true
        // })
        // .then(() => console.log("MongoDB Atlas se successfully connected!"))
        // .catch(err => console.error("Connection error:", err));
    
    // Step 7: Cluster Status Check Karo
        //to manually disconnect from mongodb
            // process.on("SIGINT", async () => {
            //     await mongoose.connection.close();
            //     console.log("MongoDB se connection close kar diya gaya!");
            //     process.exit(0);
            //   });

    //Step 8: Database Create Karna -> Data Insert Karna (Manual Testing ke liye)
    //Step 9: Node.js Se Data Fetch Karna

            // const mongoose = require("mongoose");

            // const uri = "mongodb+srv://<user and pass>@testingfunda.mpja3.mongodb.net/portfolioDB?retryWrites=true&w=majority&appName=TestingFunda";

            // mongoose.connect(uri)
            // .then(() => console.log("MongoDB Connected"))
            // .catch(err => console.error("Connection error:", err));

            // // Schema & Model
            // const userSchema = new mongoose.Schema({
            //     name: String,
            //     email: String,
            //     age: Number
            // });

            // const User = mongoose.model("User", userSchema);

            // // Fetch Data
            // User.find({})
            //     .then(users => {
            //         console.log("Users:", users);
            //     })
            //     .catch(err => console.error("Error fetching users:", err));

    //Step 10 : CRUD operations

        //Create and Read
            // const mongoose = require("mongoose");

            // const uri = "mongodb+srv://<username and password>@testingfunda.mpja3.mongodb.net/portfolioDB?retryWrites=true&w=majority&appName=TestingFunda";

            // mongoose.connect(uri)
            // .then(() => console.log("MongoDB Connected"))
            // .catch(err => console.error("Connection error:", err));

            // // Schema & Model
            // const userSchema = new mongoose.Schema({
            //     name: String,
            //     email: String,
            //     age: Number
            // });

            // const User = mongoose.model("User", userSchema);

            // // Insert a User
            // const newUser = new User({
            //     name: "Chitta",
            //     email: "chitta@hikehde.com",
            //     age: 25
            // });

            // newUser.save()
            //     .then(() => {
            //         console.log("User Added!");
            //         return User.find({});     // Fetch All Users
            //     }) 
            //     .then(users => {
            //         console.log("Users:", users);
            //     })
            //     .catch(err => console.error("Error:", err));

        //Update and delete 

            // //  Update User (findOneAndUpdate)
            // const updateUser = async () => {
            //     try {
            //         const updatedUser = await User.findOneAndUpdate(
            //             { email: "chitta@hikehde.com" },  // Kisko update karna hai (filter)
            //             { age: 28 },                      // Kya update karna hai
            //             { new: true }                      // Updated document return karega
            //         );

            //         console.log("Updated User:", updatedUser);
            //     } catch (err) {
            //         console.error(" Update Error:", err);
            //     }
            // };

            // //  Delete User (deleteOne)
            // const deleteUser = async () => {
            //     try {
            //         const deleted = await User.deleteOne({ email: "chitta@hikehde.com" });
            //         console.log("User Deleted:", deleted);
            //     } catch (err) {
            //         console.error("Delete Error:", err);
            //     }
            // };

            // //  Function Calls
            // updateUser().then(() => deleteUser());