import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LoginForm } from "./components/login-form";

export default async function LoginPage() {
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
