import { z } from "zod";

export const registerSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  identificationNumber: z.string(), // TODO: add custom regex validation
  phoneNumber: z.string(), // TODO: add custom regex validation
  image: z.string().url().optional(),
});

export type RegisterSchema = z.infer<typeof registerSchema>;

// TODO: create some abstraction here for API Response and pass particular data as generic
export type RegisterResponse = {
  message: string;
};
