import { PAGE_ROUTES } from "@/lib/routes";
import { type LoginSchema } from "@/shared/auth/login-schema";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";

export function useLoginMutation() {
  return useMutation({
    mutationFn: async (payload: LoginSchema) =>
      await signIn("email", {
        email: payload.email,
        redirect: false,
        callbackUrl: PAGE_ROUTES.DASHBOARD,
      }),
  });
}
