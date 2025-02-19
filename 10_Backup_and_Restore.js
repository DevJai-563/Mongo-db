/**
 * MongoDB Atlas Backup & Restore
 * 
 * This file covers how to take backups of your MongoDB Atlas database and restore it when needed.
 */

        // const mongoose = require("mongoose");

// MongoDB Atlas Connection URI (Replace with your credentials)
        // const uri = "mongodb+srv://<username>:<password>@cluster.mongodb.net/myDB?retryWrites=true&w=majority";

// Connect to MongoDB Atlas
// try {
//     mongoose.connect(uri);
//     console.log("MongoDB Atlas Connected");
// } catch (error) {
//     console.error("Connection error:", error);
// }

/**
 * === Backup in MongoDB Atlas ===
 * 1. Go to MongoDB Atlas Dashboard (https://cloud.mongodb.com/)
 * 2. Click on your Cluster
 * 3. Navigate to 'Backup' Tab
 * 4. Click 'Take Snapshot' to manually backup your database
 * 5. Download the snapshot if needed for local storage
 */

/**
 * === Restore in MongoDB Atlas ===
 * 1. Go to MongoDB Atlas Dashboard
 * 2. Click on your Cluster
 * 3. Navigate to 'Backup' Tab
 * 4. Click 'Restore' next to the snapshot you want to restore
 * 5. Confirm and wait for the process to complete
 */

/**
 * === Local Backup & Restore (mongodump & mongorestore) ===
 * 
 * # Backup Command:
 *      mongodump --uri="mongodb+srv://<username>:<password>@cluster.mongodb.net/myDB" --out=/backup-folder
 * 
 * # Restore Command:
 *      mongorestore --uri="mongodb+srv://<username>:<password>@cluster.mongodb.net/myDB" /backup-folder
 *
 */