"use client";

import React from "react";

interface SimpleProductCardProps {
  imageUrl: string;
  productName: string;
  price: string;
  color: string;
  className?: string;
}

export const SimpleProductCard: React.FC<SimpleProductCardProps> = ({
  imageUrl,
  productName,
  price,
  color,
  className = "",
}) => {
  return (
    <div
      className={`text-base tracking-wider text-center max-w-[339px] ${className}`}
    >
      <img
        loading="lazy"
        src={imageUrl}
        className="object-contain w-full rounded-lg aspect-[0.81]"
        alt={productName}
      />
      <div className="flex flex-col mt-5">
        <div className="flex gap-10 items-start">
          <div className="text-black">{productName}</div>
          <div className="font-semibold text-black">{price}</div>
        </div>
        <div className="self-start mt-2 text-stone-500">{color}</div>
      </div>
    </div>
  );
};

export default SimpleProductCard;
