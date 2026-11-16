
import 'dotenv/config';
import express from 'express'
import { MongoClient } from 'mongodb';
import dns from 'node:dns';
dns.setServers(['1.1.1.1', '8.8.8.8']);
const app = express();
const port = 3000
app.get("/", (req, res) => {
    res.send("Hello")
})

app.listen(port, () => console.log("server running: 3000"))



 
// Replace this with your own connection string
//so you dont release the key into the world
const uri = process.env.MONGO_URI;
 const client = new MongoClient(uri);

 
async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
 
run().catch(console.dir);