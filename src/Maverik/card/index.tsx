"use client";
import * as React from "react";

interface MaverikCardProps {
  image: string;
  title: string;
  price: string;
  color?: string;
}

function MaverikCard({
  image,
  title,
  price,
  color = "Soft Blue",
}: MaverikCardProps) {
  return (
    <div className="flex flex-col text-base tracking-wider text-center max-w-[383px]">
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
}

export default MaverikCard;
