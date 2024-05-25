import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LoginForm } from "./components/login-form";
import { getServerAuthSession } from "@/server/auth/config";

export default async function LoginPage() {
  const session = await getServerAuthSession();

  console.log(session);

  return (
    <main className="grid h-screen place-items-center">
      <Card>
        <CardHeader>
          <h1 className="text-2xl">
            {`Sign in to manage your `}
            <span className="font-bold">Community</span>
          </h1>
        </CardHeader>

        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </main>
  );
}
