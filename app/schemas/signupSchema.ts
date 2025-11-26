import {string, z} from 'zod'

export const usernameValidation =z
    .string()
    .min(5,'username must be 5 characters')
    .max(20,'username must be less than 20 characters')
    .regex(/^[a-zA-Z0-9]+$/,'Username must not contain special character')

    export const signupSchema=z.object({
        userName:usernameValidation,
        email:z.string().email({message:"Invalid email address"}),
        password:string().min(4,{message:"must be at least 4 character"})
    })