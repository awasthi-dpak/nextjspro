import { resend } from "../lib/resend";
import VerificationEmail from "@/emails/VerificationEmail";
import { ApiResponse } from "../types/ApiResponse";

export async function sendVerificationEmail(
    email:string,
    username:string,
    verifyCode:string
):Promise<ApiResponse>{

    try {

        await resend.emails.send({
  from: 'you@example.com',
  to: email,
  subject: 'Verificatin code',
  react: VerificationEmail({username,otp:verifyCode}),
});

         return{success:false,message:"Varification email send successfully"}
    } catch (error) {
        console.log('error sending varification email',error);
        return{success:false,message:"Failed to send varification email"}
    }
}