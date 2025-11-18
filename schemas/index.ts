import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1)
})

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    name: z.string().min(1, {
        message: "Name is required"
    }),
    password: z.string().min(6, {
        message: "Minimum 6 characters"
    })
})

export const MedicationSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required"
    }),
    dosage: z.string().min(1, {
        message: "Dosage is required"
    }),
    time: z.string().min(1, {
        message: "Time is required"
    })
})