// Relationships in MongoDB
    // MongoDB ek NoSQL database hai, jo JSON-like documents use karta hai. 
    // Lekin real-world applications mein humein multiple collections ka data ek doosre se relate karna padta hai, jaise:

        // Ek user ke multiple orders ho sakte hain.
        // Ek post ke multiple comments ho sakte hain.
    // Is tarah ke relations banane ke do tareeke hote hain:
        //1. Embedding (Embedded Documents)
        //2. Referencing (Normalization / Foreign Key Concept)

// 1. Embedding (Embedded Documents) – Theory
    // Embedding ka matlab hota hai ki related data ko ek hi document ke andar store karna. Matlab, alag collection banane ki zaroorat nahi hoti.
        //  Jab related data kam hota hai aur frequently access hota hai.
        //  Jab ek entity ka data mostly uske saath hi use hota hai.

            // Example Use Case:
                // Ek user ke multiple addresses ho sakte hain. 
                // Is case mein address ko user document ke andar hi store karna better hota hai.

                // db.users.insertOne({
                //     name: "Rahul Sharma",
                //     email: "rahul@example.com",
                //     addresses: [                      //Har address ek embedded document hai.
                //       {
                //         street: "123 Main St",
                //         city: "Delhi",
                //         pincode: "110001"
                //       },
                //       {
                //         street: "456 Park Ave",
                //         city: "Mumbai",
                //         pincode: "400001"
                //       }
                //     ]
                // });

// 2️. Referencing (Normalization) – Theory
    // Referencing ka matlab hota hai related data ko alag-alag collections me store karna aur unke beech ek connection banana.
                
    // Kab Use Karein?
        //  Jab data ka size bada ho ya frequently update hota ho.
        //  Jab multiple documents same data ko reference kar rahe ho, taaki duplication na ho.
                
    // Example Use Case:
        // Ek user ke multiple orders ho sakte hain. Agar hum orders ko user ke document me embed kar dein, to user ka document bohot bada ho sakta hai.
        //  Isliye, orders ko alag collection me rakhna better hota hai.

        // Referencing me hum user aur orders ko alag collections me store karte hain aur unke beech _id ka reference rakhte hain.

                // Users Collection:
            
                // {
                // "_id": ObjectId("65d123abc456def789001234"),
                // "name": "Rahul Sharma",
                // "email": "rahul@example.com"
                // }

                // Orders Collection:
                
                // {
                // "_id": ObjectId("98a456def789ghi123000567"),
                // "user_id": ObjectId("65d123abc456def789001234"),
                // "product": "Laptop",
                // "price": 50000
                // }
    //$lookup
        //do collections ko join karne ke liye
        //Example Use Case:
        // Humne users aur orders alag collections me store kiye the (Referencing).
        // Ab humein user ke saath saare orders bhi ek query me chahiye.

                // db.users.aggregate([
                //     {
                //       $lookup: {
                //         from: "orders",       // Jis collection se join karna hai
                //         localField: "_id",    // users collection ka field (Primary Key)
                //         foreignField: "user_id", // orders collection ka field (Foreign Key)
                //         as: "user_orders"     // Merged data ka naam
                //       }
                //     }
                //   ]);
                       