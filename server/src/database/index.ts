import { MongoClient } from "mongodb";
import { Database } from "../lib/types";


const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_USER_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/?retryWrites=true&w=majority`
console.log(url);
export const connectDatabase = async (): Promise<Database> => {
    const client = await MongoClient.connect(url);
    const db = client.db("main");

    return {
        listings: db.collection("test_listings")
    };
}