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

export function LoginForm() {
  const { toast } = useToast();
  const loginMutation = useLoginMutation();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
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

    toast({
      title: "Magic link sent",
      description: "The login link has been sent to your email.",
    });
  };

  return (
    <Form {...form}>
      <form
        noValidate
        className="flex flex-wrap items-end gap-4 md:flex-nowrap"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField<LoginSchema>
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem className="w-full md:w-2/3">
              <FormLabel>Email</FormLabel>

              <FormControl>
                <Input {...field} type="email" />
              </FormControl>
            </FormItem>
          )}
        />

        <ButtonLoading
          className="w-full md:w-1/3"
          isLoading={loginMutation.isPending}
          type="submit"
        >
          Send code
        </ButtonLoading>
      </form>
    </Form>
  );
}
