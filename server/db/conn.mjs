import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://Brayton:Slayer2708@clusterice.jggrcva.mongodb.net/?retryWrites=true&w=majority" ;
//console.log(connectionString);
//const connectionString = process.env.ATLAS_URI;
//console.log(connectionString);

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
  console.log("successfully connected to Db")
} catch(e) {
  console.error(e);
}



  let db = conn.db("valheim");



  export default db;