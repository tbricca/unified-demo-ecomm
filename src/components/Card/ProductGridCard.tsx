"use client";

import React from "react";

interface ProductGridCardProps {
  image: string;
  name: string;
  price: string;
  color: string;
  className?: string;
}

export const ProductGridCard: React.FC<ProductGridCardProps> = ({
  image,
  name,
  price,
  color,
  className = "",
}) => {
  return (
    <div className={`min-w-60 w-[339px] ${className}`}>
      <img
        loading="lazy"
        srcSet={image}
        className="object-contain max-w-full rounded-lg aspect-[0.81] w-[339px]"
        alt={name}
      />
      <div className="flex flex-col mt-5">
        <div className="flex gap-10 justify-between items-start w-full">
          <div className="text-base tracking-wider">{name}</div>
          <div className="font-semibold">{price}</div>
        </div>
        <div className="self-start mt-2 text-base tracking-wider">{color}</div>
      </div>
    </div>
  );
};
