"use client";
import React from "react";
import Image from "next/image";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  color: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  color,
}) => {
  return (
    <div className="flex flex-col flex-1 shrink basis-0 min-w-60">
      <img
        src={image}
        className="object-contain w-full rounded-lg aspect-[0.91]"
        alt={title}
      />
      <div className="flex flex-col self-start mt-5">
        <div className="flex gap-10 items-start">
          <div className="text-black">{title}</div>
          <div className="font-semibold text-black">{price}</div>
        </div>
        <div className="self-start mt-2 text-stone-500">{color}</div>
      </div>
    </div>
  );
};

export default ProductCard;
