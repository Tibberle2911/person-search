'use client';

import { z } from "zod";
import { UseFormReturn } from "react-hook-form";
import MutableDialog, { ActionState } from "@/components/mutable-dialog";
import { userFormSchema, User } from '@/app/actions/schemas'

export type UserFormData = z.infer<typeof userFormSchema>;

// 2. Form component
function UserForm({ form }: { form: UseFormReturn<UserFormData> }) {
  const { register, formState: { errors } } = form;

  return (
    <div className="space-y-4">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium">Name</label>
        <input
          id="name"
          {...register("name")}
          className="border rounded px-2 py-1 w-full"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium">Email</label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="border rounded px-2 py-1 w-full"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-medium">
          Phone Number
        </label>
        <input
          id="phoneNumber"
          type="tel"
          {...register("phoneNumber")}
          className="border rounded px-2 py-1 w-full"
        />
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm">{errors.phoneNumber.message}</p>
        )}
      </div>
    </div>
  );
}

// 3. Action handler
async function handleAddUser(data: UserFormData): Promise<ActionState<User>> {
  try {
    // Example API call would go here
    const user: User = {
      id: crypto.randomUUID(), // Generate a unique id
      ...data,
    };
    return {
      success: true,
      message: `User ${data.name} added successfully`,
      data: user,
    };
  } catch {
    return {
      success: false,
      message: "Failed to add user",
    };
  }
}

// 4. Dialog wrapper
export function AddUserDialog() {
  return (
    <MutableDialog<UserFormData>
      formSchema={userFormSchema}
      FormComponent={UserForm}
      action={handleAddUser}
      triggerButtonLabel="Add User"
      addDialogTitle="Add New User"
      dialogDescription="Fill out the form below to add a new user."
      submitButtonLabel="Save"
      defaultValues={{ name: "", email: "", phoneNumber: "" }}
    />
  );
}
