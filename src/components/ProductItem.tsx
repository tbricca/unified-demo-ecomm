"use client";

import * as React from "react";

interface ProductItemProps {
  image: string;
  name: string;
  price: string;
  color: string;
}

export const ProductItem: React.FC<ProductItemProps> = ({
  image,
  name,
  price,
  color,
}) => {
  return (
    <article className="flex flex-col flex-1 shrink basis-0 min-w-60">
      <img
        src={image}
        alt={`${name} - ${color}`}
        className="object-contain w-full rounded-lg aspect-[0.91]"
      />
      <div className="flex flex-col self-start mt-5">
        <div className="flex gap-10 items-start justify-between w-full">
          <h3 className="text-black text-base tracking-wider">{name}</h3>
          <span className="font-semibold text-black text-base tracking-wider">
            {price}
          </span>
        </div>
        <p className="self-start mt-2 text-stone-500 text-base tracking-wider">
          {color}
        </p>
      </div>
    </article>
  );
};
