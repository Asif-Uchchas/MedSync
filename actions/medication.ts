"use server";

import * as z from "zod";
import { db } from "@/lib/db";
import { MedicationSchema } from "@/schemas";
import { auth } from "@/auth";

export const addMedication = async (values: z.infer<typeof MedicationSchema>) => {
    const validatedFields = MedicationSchema.safeParse(values);
    const session = await auth();

    if (!validatedFields.success) {
        return { error: "Invalid fields!" };
    }

    if (!session?.user?.id) {
        return { error: "Unauthorized" };
    }

    const { name, dosage, time } = validatedFields.data;

    await db.medication.create({
        data: {
            name,
            dosage,
            time,
            userId: session.user.id,
        },
    });

    return { success: "Medication added!" };
};

export const getMedications = async () => {
    const session = await auth();

    if (!session?.user?.id) {
        return { error: "Unauthorized" };
    }

    const medications = await db.medication.findMany({
        where: {
            userId: session.user.id,
        },
    });

    return { medications };
};

export const updateMedication = async (id: string, values: z.infer<typeof MedicationSchema>) => {
    const validatedFields = MedicationSchema.safeParse(values);
    const session = await auth();

    if (!validatedFields.success) {
        return { error: "Invalid fields!" };
    }

    if (!session?.user?.id) {
        return { error: "Unauthorized" };
    }

    const { name, dosage, time } = validatedFields.data;

    await db.medication.update({
        where: {
            id,
            userId: session.user.id,
        },
        data: {
            name,
            dosage,
            time,
        },
    });

    return { success: "Medication updated!" };
};

export const deleteMedication = async (id: string) => {
    const session = await auth();

    if (!session?.user?.id) {
        return { error: "Unauthorized" };
    }

    await db.medication.delete({
        where: {
            id,
            userId: session.user.id,
        },
    });

    return { success: "Medication deleted!" };
};
