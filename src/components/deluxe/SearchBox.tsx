"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SearchBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void;
  className?: string;
  placeholder?: string;
  searchIconUrl?: string;
}

const SearchBox = React.forwardRef<HTMLInputElement, SearchBoxProps>(
  (
    {
      className,
      onSearch,
      placeholder = "Search...",
      searchIconUrl = "https://cdn.builder.io/api/v1/image/assets/63f2ce2bdfab4e1fa0343b7d8a43d1d9/ebe358ab79f7e0efe8ed74d1a8f6a0cf2b30bf58?placeholderIfAbsent=true",
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = React.useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setValue(newValue);
      if (onSearch) {
        onSearch(newValue);
      }
    };

    return (
      <div
        className={cn(
          "text-base whitespace-nowrap max-w-[300px] text-stone-500",
          className,
        )}
      >
        <div className="w-full min-h-[38px]">
          <div className="flex gap-1 px-2 py-2 w-full bg-white rounded border border-solid border-zinc-800 min-h-[38px]">
            <img
              src={searchIconUrl}
              alt="Search"
              className="object-contain shrink-0 my-auto w-6 aspect-square"
            />
            <input
              type="text"
              ref={ref}
              value={value}
              onChange={handleChange}
              placeholder={placeholder}
              className="flex-1 shrink basis-0 text-ellipsis bg-transparent border-none outline-none focus:ring-0 p-0 text-stone-500 placeholder:text-stone-500"
              aria-label="Search input"
              {...props}
            />
          </div>
        </div>
      </div>
    );
  },
);

SearchBox.displayName = "SearchBox";

export default SearchBox;
