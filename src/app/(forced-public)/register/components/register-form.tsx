"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  registerSchema,
  type RegisterSchema,
} from "@/shared/auth/register-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterMutation } from "../queries/register-mutation";
import { ButtonLoading } from "@/components/button-loading";

export function RegisterForm() {
  const registerMutation = useRegisterMutation();
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (formValues: RegisterSchema) => {
    await registerMutation.mutateAsync(formValues);
  };

  return (
    <Form {...form}>
      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <div className="space-y-4">
          <FormField<RegisterSchema>
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>

                <FormControl>
                  <Input {...field} type="text" />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField<RegisterSchema>
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>

                <FormControl>
                  <Input {...field} type="email" />
                </FormControl>

                <FormDescription>
                  Should be a real email address.
                </FormDescription>
              </FormItem>
            )}
          />

          <FormField<RegisterSchema>
            name="identificationNumber"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Identification Number</FormLabel>

                <FormControl>
                  <Input {...field} type="text" />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField<RegisterSchema>
            name="phoneNumber"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone number</FormLabel>

                <FormControl>
                  <Input {...field} type="text" />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <ButtonLoading isLoading={registerMutation.isPending}>
          Continue
        </ButtonLoading>
      </form>
    </Form>
  );
}
