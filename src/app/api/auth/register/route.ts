import { db } from "@/server/db";
import { registerSchema } from "@/shared/auth/register-schema";
import { StatusCodes } from "http-status-codes";

export async function POST(req: Request) {
  const body = (await req.json()) as unknown;
  const payload = registerSchema.parse(body);

  const userExists = await db.user.findUnique({
    where: { email: payload.email },
  });

  if (userExists) {
    return Response.json(
      {
        error: "Email already registered",
      },
      {
        status: StatusCodes.UNPROCESSABLE_ENTITY,
      },
    );
  }

  await db.user.create({
    data: {
      ...payload,
      role: "ADMIN",
    },
  });

  return Response.json({
    message: "User created successfully",
  });
}
