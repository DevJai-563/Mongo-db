// MongoDB Security – Authentication, Role-Based Access
    // Security ka main focus data ko unauthorized access se bachana hai. 
    // MongoDB security ke 3 major parts hain:
        // 1️.Authentication – Kaun database access kar sakta hai?
        // 2️. Authorization (Role-Based Access) – Kaun kya operations perform kar sakta hai?
        // 3️. Encryption & Network Security – Data ko secure rakhna

// 1️. Authentication – MongoDB Users & Passwords
    // By default, MongoDB authentication disable hoti hai, yani koi bhi MongoDB server se directly connect ho sakta hai.

        // MongoDB me User Create Karna (Admin User)
            // Mongo Shell Open Karo
                // mongosh
        // Admin Database Select Karo
                // use admin
        // Admin User Create Karo
                // db.createUser({
                //   user: "adminUser",
                //   pwd: "securePassword",                     // "securePassword" ko strong password se replace karo.
                //   roles: [{ role: "root", db: "admin" }]    // "root" role full access deta hai.
                // });
                    
    // MongoDB Authentication Enable Karna
        // Authentication enable karne ke liye MongoDB config file edit karni padegi.

        // MongoDB Config File Open Karo

        // Linux: /etc/mongod.conf
        // Windows: C:\Program Files\MongoDB\Server\6.0\bin\mongod.cfg

        // Security Section Add Karo
            // security:
            //   authorization: enabled

        // MongoDB Restart Karo


    // MongoDB Login with Authentication
        // Ab authentication enable ho chuka hai. MongoDB access karne ke liye login karna padega:

                // mongosh -u adminUser -p securePassword --authenticationDatabase admin
                
    // Authentication Summary:
    //  By default MongoDB open hota hai (No authentication)
    //  Hum admin user create karte hain jo MongoDB manage karega
    //  Config file me authentication enable karni hoti hai
    //  Ab MongoDB tabhi access hoga jab correct username & password diya jaye

//2. Role-Based Access Control (RBAC) –  Authorization in Mongo DB
    // Authentication batata hai Kaun login kar sakta hai, lekin Authorization (RBAC) batata hai Kaun kya kar sakta hai.

    // Agar ek developer sirf read kar sakta hai, lekin delete nahi kar sakta, to data safe rahega. 
    // Isi liye roles use karte hain.

    // MongoDB me built-in roles hote hain jaise:

        // read → Sirf data dekh sakta hai.
        // readWrite → Data dekh bhi sakta hai aur insert/update bhi kar sakta hai.
        // dbAdmin → Database manage kar sakta hai.
        // userAdmin → Naye users aur roles create kar sakta hai.


    // 1. Read-Only User Create Karo

            // db.createUser({
            // user: "readUser",
            // pwd: "readPassword",
            // roles: [{ role: "read", db: "myDatabase" }]
            // });

    // 2. Read-Write User

            // db.createUser({
            // user: "editorUser",
            // pwd: "editorPassword",
            // roles: [{ role: "readWrite", db: "myDatabase" }]
            // });


    // Login as :-

            // mongosh -u readUser -p readPassword --authenticationDatabase myDatabase

    // Summary of RBAC:
    //  Roles se hum control karte hain ki user kya kar sakta hai.
    //  Built-in roles jaise read, readWrite, dbAdmin use kar sakte hain.
    //  Users ko sirf required permissions deni chahiye, taaki security strong rahe.

//3.Network Security & Data Encryption
    //MongoDB ko unauthorized access se bachane ke liye network security aur encryption use karte hain.

    // 1️. Bind MongoDB to a Specific IP (Remote Access Ko Block Karna)
        // By default, MongoDB sabhi IPs se connection allow karta hai. 
        // Agar tumhare server pe MongoDB publicly open hai, to hacker usse connect kar sakta hai. 
        // Isko secure karne ke liye MongoDB sirf localhost se access hone dena chahiye.

        //Config file edit karo:

            //sudo nano /etc/mongod.conf  
   
        //Bind IP ko localhost pe set karo:

            // net:
            // bindIp: 127.0.0.1
    
        //MongoDB Restart Karo:

            //sudo systemctl restart mongod  
   
        //Ab MongoDB sirf localhost (127.0.0.1) se access hoga, internet se nahi.

    //2. SSL/TLS Encryption (Secure Connection Enable Karna)
        // Agar MongoDB remote access ke liye open hai, to SSL/TLS encryption enable karna zaroori hai, taaki data encrypted rahe.

        //  MongoDB ke liye SSL certificate generate karo (Self-Signed ya Let's Encrypt use kar sakte ho).
        //  Config file me SSL enable karo:

  
            // net:
            // ssl:
            //     mode: requireSSL
            //     PEMKeyFile: /etc/ssl/mongodb.pem

        // Ab sirf encrypted (SSL) connection allow hoga.

    // 3️. Firewall Rules Set Karna
        // Agar MongoDB remote access ke liye open hai, to firewall se sirf specific IPs ko allow karo.

        // Ubuntu/Linux pe Firewall Rule Set Karo:

            //sudo ufw allow from 192.168.1.100 to any port 27017
    
        //Isse sirf IP 192.168.1.100 MongoDB se connect ho sakti hai.

    // 4️. Disable MongoDB HTTP Status Interface
        // MongoDB ka HTTP status interface (http://localhost:28017) by default open hota hai, jo security risk ho sakta hai.

        //Config file me disable karo:

            // setParameter:
            // enableLocalhostAuthBypass: false
    
        //MongoDB Restart Karo:

            //sudo systemctl restart mongod
   
    //  Summary of MongoDB Security:
    //  Authentication Enable Karo (Username + Password Required)
    //  Role-Based Access (RBAC) Use Karo (Har User Ko Limited Permissions Do)
    //  Bind IP to Localhost (MongoDB Sirf Local System Pe Chale)
    //  SSL/TLS Enable Karo (Data Encryption Ke Liye)
    //  Firewall Use Karo (Sirf Trusted IPs Ko Allow Karo)
    //  HTTP Status Interface Disable Karo