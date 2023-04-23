import {MongoClient} from "mongodb"
const MONGO_URL ="mongodb://127.0.0.1:27017"

export async function createDbCollections(){

    //creating a new client to connect

    const client = new MongoClient(MONGO_URL)

    //letting the client to connect
    await client.connect()
    console.log('mongodb is connected successfully')
    return client
}

export const client= await createDbCollections();