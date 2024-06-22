"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema, type LoginSchema } from "@/shared/auth/login-schema";
import { useForm } from "react-hook-form";

import { useToast } from "@/components/ui/use-toast";

import { zodResolver } from "@hookform/resolvers/zod";
import { ButtonLoading } from "@/components/button-loading";
import { useLoginMutation } from "../queries/login-mutation";
import React from "react";
import { useUpdateSearchParams } from "@/hooks/useSearchParams";

export function LoginForm() {
  const updateSearchParams = useUpdateSearchParams();

  const { toast } = useToast();
  const loginMutation = useLoginMutation();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: ""
    }
  });

  const onSubmit = async (formValues: LoginSchema) => {
    const response = await loginMutation.mutateAsync(formValues);

    if (!response?.ok || response.error) {
      toast({
        title: "Cannot send magic link",
        description:
          "Something went wrong sending the magic link to your email!",
        variant: "destructive",
      });
      return;
    }

    updateSearchParams(formValues);
  };

  return (
    <Form {...form}>
      <form
        noValidate
        className="flex flex-col gap-2"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField<LoginSchema>
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Email</FormLabel>

              <FormControl>
                <Input
                  {...field}
                  placeholder="youremail@mail.com"
                  type="email"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <ButtonLoading
          className="w-full"
          isLoading={loginMutation.isPending}
          type="submit"
        >
          Send authentication link
        </ButtonLoading>
      </form>
    </Form>
  );
}
