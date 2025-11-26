import {z} from "zod";

const messageSchema=z.object({
    message:z.string()
    .min(1,'Message cannot be empty')
    .max(500,'Message cannot exceed 500 characters')
})