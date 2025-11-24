import {z} from 'zod'

export const usernameValidation =z
    .string()
    .min(5,'username must be 5 characters')
    .max(20,'username must be less than 20 characters')
    .regex()