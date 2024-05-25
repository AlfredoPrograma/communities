import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { RegisterForm } from "./components/register-form";

export default async function RegisterPage() {
  return (
    <main className="grid h-screen place-items-center">
      <Card>
        <CardHeader>
          <h1 className="text-2xl">Create new account</h1>
          <CardDescription>
            <h2>And start to improve your community management</h2>
          </CardDescription>
        </CardHeader>

        <CardContent>
          <RegisterForm />
        </CardContent>
      </Card>
    </main>
  );
}
