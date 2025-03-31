"use client";

import * as React from "react";
import DeluxeInputDropdown from "@/components/deluxe/DeluxeInputDropdown";

export interface DeluxeTableFiltersProps {
  numberOfFilters?: number;
  className?: string;
}

const DeluxeTableFilters: React.FC<DeluxeTableFiltersProps> = ({
  numberOfFilters = 3,
  className,
}) => {
  return (
    <div className={`flex flex-wrap gap-2 items-end ${className || ""}`}>
      {Array.from({ length: numberOfFilters }, (_, index) => (
        <DeluxeInputDropdown
          key={`filter-${index}`}
          variant="neutral"
          className="max-w-[324px] w-[300px]"
          label="Label"
          placeholder="Select..."
        />
      ))}
    </div>
  );
};

DeluxeTableFilters.displayName = "DeluxeTableFilters";

export default DeluxeTableFilters;
