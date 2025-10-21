import z from "zod";

export const registerSchmea = z.object({
    name: z.string("Name is required.").min(3, "Name must be at least 3 characters long."),
    email: z.email("Invalid Email."),
    password: z.string("Password is required.").min(6, "Password must be at least 6 characters long."),
})
export const loginSchmea = z.object({
    email: z.email("Invalid Email."),
    password: z.string("Password is required.").min(6, "Password must be at least 6 characters long."),
})






export type registerType = z.infer<typeof registerSchmea>
export type loginType = z.infer<typeof loginSchmea>