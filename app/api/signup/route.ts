import dbConnect from "@/app/lib/dbConnect";
import UserModel from "@/app/models/user";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/app/helpers/sendVerificationEmail";

export async function POST(request:Request){
    await dbConnect()

    try {

        const{username,email,password}=await request.json()
        
    } catch (error) {
        console.log('Error in signup account',error);
        return Response.json(
            {
                success:false,
                message:"error registering user"
            },
            {
                status:500
            }
        )
    }
}