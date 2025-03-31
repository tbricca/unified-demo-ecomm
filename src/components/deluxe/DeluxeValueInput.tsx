"use client";

import * as React from "react";
import { Input } from "@/src/components/ui/input";

export interface DeluxeValueInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
}

const DeluxeValueInput = React.forwardRef<
  HTMLInputElement,
  DeluxeValueInputProps
>(({ className, containerClassName, ...props }, ref) => {
  return (
    <div className={`max-w-[197px] min-w-[100px] ${containerClassName || ""}`}>
      <div className="flex gap-1 w-full bg-white rounded border border-solid border-zinc-800 min-h-[38px]">
        <Input
          className={`border-0 shadow-none focus-visible:ring-0 placeholder:text-black ${className || ""}`}
          ref={ref}
          {...props}
        />
      </div>
    </div>
  );
});

DeluxeValueInput.displayName = "DeluxeValueInput";

export default DeluxeValueInput;
