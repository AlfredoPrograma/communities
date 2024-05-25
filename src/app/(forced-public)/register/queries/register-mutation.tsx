import { API_ROUTES } from "@/lib/routes";
import { api } from "@/server/api";
import {
  type RegisterResponse,
  type RegisterSchema,
} from "@/shared/auth/register-schema";
import { useMutation } from "@tanstack/react-query";

export function useRegisterMutation() {
  return useMutation({
    mutationFn: (payload: RegisterSchema) =>
      api.post<RegisterResponse>(API_ROUTES.REGISTER, payload),
  });
}
