"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { type LoginSchema } from "@/shared/auth/login-schema";
import { useForm } from "react-hook-form";

import { signIn, signOut } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { PAGE_ROUTES } from "@/lib/routes";

export function LoginForm() {
  const { toast } = useToast();

  const form = useForm<LoginSchema>({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (formValues: LoginSchema) => {
    const response = await signIn("email", {
      email: formValues.email,
      redirect: false,
      callbackUrl: PAGE_ROUTES.DASHBOARD,
    });

    if (!response?.ok) {
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
        className="flex items-end gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField<LoginSchema>
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Email</FormLabel>

              <FormControl>
                <Input {...field} type="email" />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit">Send code</Button>

        <Button type="button" onClick={() => signOut()}>
          Logout
        </Button>
      </form>
    </Form>
  );
}
