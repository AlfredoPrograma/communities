import { PrismaAdapter } from "@auth/prisma-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import { type Adapter } from "next-auth/adapters";

import EmailProvider from "next-auth/providers/email";

import { db } from "@/server/db";
import { emailAuthentication } from "./email-authentication";
import { env } from "@/env";
import { PAGE_ROUTES } from "@/lib/routes";
import { redirect } from "next/navigation";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  callbacks: {
    signIn: async ({ user }) => {
      const userExists = await db.user.findUnique({
        where: { email: user.email ?? undefined }, // Coerce `null` to `undefined` to fullfill needed type
      });

      if (!userExists) {
        throw new Error("Invalid credentials");
      }

      return true;
    },
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    EmailProvider({
      sendVerificationRequest: emailAuthentication,
      from: env.RESEND_EMITTER_DOMAIN,
    }),
  ],

  pages: {
    signIn: PAGE_ROUTES.LOGIN,
    signOut: PAGE_ROUTES.LOGIN,
    newUser: PAGE_ROUTES.REGISTER,
  },
};

export const getServerAuthSession = () => getServerSession(authOptions);
