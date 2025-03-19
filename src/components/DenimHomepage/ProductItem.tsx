"use client";

import * as React from "react";

interface ProductItemProps {
  image: string;
  name: string;
  price: string;
  color: string;
}

export function ProductItem({ image, name, price, color }: ProductItemProps) {
  return (
    <div className="flex flex-col flex-1 shrink basis-0 min-w-60">
      <img
        src={image}
        alt={`${name} - ${color}`}
        className="object-contain w-full rounded-lg aspect-[0.91]"
      />
      <div className="flex flex-col mt-5 max-w-full w-[339px]">
        <div className="flex gap-10 justify-between items-start w-full">
          <div className="text-black">{name}</div>
          <div className="font-semibold text-black">{price}</div>
        </div>
        <div className="self-start mt-2 text-stone-500">{color}</div>
      </div>
    </div>
  );
}
