import mongoose from "mongoose";

type ConnectionObject={
    isConnected?:number
}

const connection:ConnectionObject={}

async function dbConnect():Promise<void>{
    if(connection.isConnected){
        console.log("Already connected to DataBase");
        
    }

    try {
       const db= await mongoose.connect(process.env.MONGODB_URL || '', {})

        connection.isConnected=db.connections[0].readyState
        console.log('DB is connected');
        
    } catch (error) {
        console.log("Db connection is failed");
        process.exit(1)
    }
}

export default dbConnect