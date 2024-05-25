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
            And start to improve your community management
          </CardDescription>
        </CardHeader>

        <CardContent>
          <RegisterForm />
        </CardContent>
      </Card>
    </main>
  );
}
