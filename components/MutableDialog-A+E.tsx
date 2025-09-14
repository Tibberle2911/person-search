'use client';

import React, { useState, useEffect } from "react";
import { useForm, type UseFormReturn, type FieldValues, type DefaultValues } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from "sonner"; // Using Sonner for notifications
import { ZodType } from "zod";

export interface ActionState<T> {
  success: boolean;
  message: string | null;
  data?: T;
}

interface GenericDialogProps<T extends FieldValues> {
  formSchema: ZodType<T>;
  FormComponent: React.ComponentType<{ form: UseFormReturn<T> }>;
  action?: (data: T) => Promise<ActionState<T>>;
  triggerButtonLabel?: string;
  addDialogTitle?: string;
  editDialogTitle?: string;
  dialogDescription?: string;
  submitButtonLabel?: string;
  defaultValues?: DefaultValues<T>;
}

export default function MutableDialog<T extends FieldValues>({
  formSchema,
  FormComponent,
  action,
  defaultValues,
  triggerButtonLabel = defaultValues ? "Edit" : "Add",
  addDialogTitle = "Add",
  editDialogTitle = "Edit",
  dialogDescription = defaultValues
    ? "Make changes to your item here. Click save when you're done."
    : "Fill out the form below to add a new item.",
  submitButtonLabel = defaultValues ? "Save" : "Add",
}: GenericDialogProps<T>) {
  const [open, setOpen] = useState(false);

  const form = useForm<T>({
    resolver: async (values) => {
      try {
        const result = formSchema.parse(values);
        return { values: result, errors: {} };
      } catch (err: any) {
        if (err.formErrors?.fieldErrors) {
          return { values: {}, errors: err.formErrors.fieldErrors };
        }
        return { values: {}, errors: {} };
      }
    },
    defaultValues,
  });

  // Reset form on close
  useEffect(() => {
    if (!open) {
      form.reset(defaultValues);
    }
  }, [open, form, defaultValues]);

  async function handleSubmit(data: T) {
    if (!action) {
      throw new Error("No action function provided");
    }

    const result = await action(data);

    if (result.success) {
      toast.success(result.message ?? "Action completed");
    } else {
      toast.error(result.message ?? "Something went wrong");
    }
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>{triggerButtonLabel}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{defaultValues ? editDialogTitle : addDialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FormComponent form={form} />
          <DialogFooter className="mt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Close
            </Button>
            <Button type="submit">{submitButtonLabel}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
