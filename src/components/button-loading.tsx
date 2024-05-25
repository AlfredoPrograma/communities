"use client";

import { type ComponentProps } from "react";
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";

type ButtonLoadingProps = {
  isLoading: boolean;
} & ComponentProps<typeof Button>;

export function ButtonLoading({ isLoading, ...props }: ButtonLoadingProps) {
  return (
    <Button {...props} disabled={isLoading || props.disabled}>
      {isLoading ? (
        <Loader2Icon className="h-5 w-5 animate-spin" />
      ) : (
        props.children
      )}
    </Button>
  );
}
