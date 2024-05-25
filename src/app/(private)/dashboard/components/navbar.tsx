"use client";

import { Button } from "@/components/ui/button";
import { PAGE_ROUTES } from "@/lib/routes";
import { signOut } from "next-auth/react";

export function NavBar() {
  return (
    <nav>
      <Button
        onClick={() =>
          signOut({ redirect: false, callbackUrl: PAGE_ROUTES.LOGIN })
        }
      >
        Logout
      </Button>
    </nav>
  );
}
