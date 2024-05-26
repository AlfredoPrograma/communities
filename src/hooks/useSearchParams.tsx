import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export function useUpdateSearchParams() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const mutableParams = new URLSearchParams(searchParams.toString());

  return (newParams: Record<string, string>) => {
    Object.entries(newParams).forEach(([key, value]) => {
      mutableParams.append(key, value);
    });

    router.push(`${pathname}?${mutableParams.toString()}`);
  };
}
