"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { LoginForm } from "./login-form";
import { MailCheckIcon } from "lucide-react";
import { ButtonLoading } from "@/components/button-loading";
import Link from "next/link";
import { PAGE_ROUTES } from "@/lib/routes";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

function EmailSentContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  return (
    <>
      <CardHeader>
        <h1 className="flex flex-col text-center">
          <span className="text-xl">
            Authentication link has been sent to your email
          </span>

          <span className="text-2xl font-semibold">{email}</span>
        </h1>
      </CardHeader>

      <CardContent className="flex flex-col items-center justify-center gap-4">
        <div className="rounded-2xl border-2 border-sky-700 bg-sky-100 fill-white p-6">
          <MailCheckIcon className="h-20 w-20 stroke-sky-700" />
        </div>
        <p className="text-balance text-center">
          Verify your email and access to the magic link set in order to be
          authenticated in our platform.
        </p>
      </CardContent>

      <CardFooter className="flex flex-col justify-center gap-2 sm:flex-row sm:px-12">
        <Button asChild className="w-full sm:w-1/2">
          <Link href={PAGE_ROUTES.LOGIN}>Change email</Link>
        </Button>

        {/* TODO: implement resend functionality */}
        <ButtonLoading isLoading={false} className="w-full sm:w-1/2">
          Resend
        </ButtonLoading>
      </CardFooter>
    </>
  );
}

function LoginContent() {
  return (
    <>
      <CardHeader>
        <h1 className="flex flex-col text-center">
          <span className="text-2xl">Welcome again!</span>
          <span className="text-3xl font-semibold">
            Access to your Community
          </span>
        </h1>
      </CardHeader>

      <CardContent>
        <LoginForm />
      </CardContent>

      <CardFooter className="flex flex-col justify-center text-sm text-muted-foreground">
        <span className="block">{`Don't have an account yet?`}</span>
        <Link
          className="block font-bold hover:underline"
          href={PAGE_ROUTES.REGISTER}
        >
          Create one here
        </Link>
      </CardFooter>
    </>
  );
}

export function LoginCard() {
  const email = useSearchParams().get("email");

  return (
    <Card className="max-w-xl p-2">
      {email ? <EmailSentContent /> : <LoginContent />}
    </Card>
  );
}
