import { getServerAuthSession } from "@/server/auth/config";
import { NavBar } from "./components/navbar";

export default async function DashboardPage() {
  const { user } = (await getServerAuthSession())!;

  return (
    <main>
      <NavBar />
      <h1>Welcome again {user.name}</h1>
    </main>
  );
}
