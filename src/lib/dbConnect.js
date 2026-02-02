const { MongoClient, ServerApiVersion } = require("mongodb");
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
const uri = process.env.NEXT_MONGO_URI;
const dbName = process.env.NEXT_MONGO_NAME;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const dbConnect = async (collectionName) => {
  try {
    const db = client.db(dbName);
    console.log("MongoDB connected!");
    return db.collection(collectionName);
  } catch (e) {
    console.log(e);
  }
};