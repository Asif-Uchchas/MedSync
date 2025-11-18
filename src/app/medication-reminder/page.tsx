"use client";

import React, { useState, useTransition } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MedicationSchema } from "@/schemas";
import { Input } from "@/src/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { Button } from "@/src/components/ui/button";
import { addMedication, getMedications } from "@/actions/medication";
import { toast } from "sonner";

const MedicationReminderPage = () => {
  const [isPending, startTransition] = useTransition();
  const [medications, setMedications] = useState<any[]>([]);

  const form = useForm<z.infer<typeof MedicationSchema>>({
    resolver: zodResolver(MedicationSchema),
    defaultValues: {
      name: "",
      dosage: "",
      time: "",
    },
  });

  const onSubmit = (values: z.infer<typeof MedicationSchema>) => {
    startTransition(() => {
      addMedication(values).then((data) => {
        if (data.error) {
          toast.error(data.error);
        }
        if (data.success) {
          toast.success(data.success);
          fetchMedications();
        }
      });
    });
  };

  const fetchMedications = () => {
    getMedications().then((data) => {
      if (data.medications) {
        setMedications(data.medications);
      }
    });
  };

  React.useEffect(() => {
    fetchMedications();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Medication Reminder</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Add Medication</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="Medication Name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dosage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dosage</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          placeholder="e.g., 1 pill"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Time</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          disabled={isPending}
                          type="time"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" disabled={isPending}>
                Add Medication
              </Button>
            </form>
          </Form>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Medications</h2>
          <div className="space-y-4">
            {medications.map((med) => (
              <div key={med.id} className="p-4 border rounded-lg">
                <p className="font-semibold">{med.name}</p>
                <p>Dosage: {med.dosage}</p>
                <p>Time: {med.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicationReminderPage;