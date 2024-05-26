import { LoginCard } from "./components/login-card";
import { ImageOverlay } from "@/components/image-overlay";

export default async function LoginPage() {
  return (
    <main className="relative">
      <ImageOverlay src="/images/communities.jpg" />

      <section className="absolute z-20 grid h-full w-full place-items-center p-6">
        <LoginCard />
      </section>
    </main>
  );
}
