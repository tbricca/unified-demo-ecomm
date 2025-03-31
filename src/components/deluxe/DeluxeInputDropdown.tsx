"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface DeluxeInputDropdownProps
  extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  placeholder?: string;
  variant?: "neutral" | "success";
  value?: string;
  className?: string;
  containerClassName?: string;
  disabled?: boolean;
  error?: string;
  required?: boolean;
  onChange?: (value: string) => void;
}

const DeluxeInputDropdown = React.forwardRef<
  HTMLDivElement,
  DeluxeInputDropdownProps
>(
  (
    {
      label,
      placeholder = "Select...",
      variant = "neutral",
      value,
      className,
      containerClassName,
      disabled = false,
      error,
      required = false,
      onChange,
      ...props
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleClick = () => {
      if (!disabled) {
        setIsOpen(!isOpen);
      }
    };

    const getVariantStyles = () => {
      switch (variant) {
        case "success":
          return "border-green-500 text-green-700";
        default:
          return "border-zinc-800 text-stone-500";
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          "text-base whitespace-nowrap max-w-[300px] min-w-[100px]",
          containerClassName,
        )}
        {...props}
      >
        {label && (
          <div
            className={cn(
              "flex-1 shrink gap-1 self-stretch w-full basis-0",
              variant === "success" ? "text-green-700" : "text-gray-950",
            )}
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </div>
        )}
        <div
          className={cn(
            "mt-2 w-full min-h-[38px]",
            variant === "success" ? "text-green-700" : "text-stone-500",
            className,
          )}
        >
          <button
            type="button"
            onClick={handleClick}
            disabled={disabled}
            className={cn(
              "flex gap-1 items-center px-2 py-2 w-full bg-white rounded border border-solid min-h-[38px]",
              getVariantStyles(),
              disabled && "opacity-50 cursor-not-allowed",
              error && "border-red-500 text-red-500",
            )}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-disabled={disabled}
          >
            <div className="flex-1 shrink self-stretch my-auto basis-0 text-ellipsis">
              {value || placeholder}
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/63f2ce2bdfab4e1fa0343b7d8a43d1d9/6d7683b6a6a3db0653e066e70dcb1ccec116052e?placeholderIfAbsent=true"
              alt=""
              className={cn(
                "object-contain shrink-0 self-stretch my-auto w-6 aspect-square transition-transform",
                isOpen && "transform rotate-180",
              )}
            />
          </button>
          {error && <div className="mt-1 text-sm text-red-500">{error}</div>}
        </div>
      </div>
    );
  },
);

DeluxeInputDropdown.displayName = "DeluxeInputDropdown";

export default DeluxeInputDropdown;
