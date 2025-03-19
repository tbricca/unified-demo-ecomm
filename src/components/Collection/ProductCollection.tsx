"use client";

import React from "react";
import { ProductGridCard } from "../Card/ProductGridCard";

interface Product {
  image: string;
  name: string;
  price: string;
  color: string;
}

interface ProductCollectionProps {
  title?: string;
  products: Product[];
  className?: string;
}

export const ProductCollection: React.FC<ProductCollectionProps> = ({
  title,
  products,
  className = "",
}) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {title && (
        <div className="gap-2.5 self-stretch max-w-full text-2xl font-semibold text-center text-black tracking-[5.25px] w-[1200px] max-md:max-w-full">
          {title}
        </div>
      )}
      <div className="flex flex-wrap gap-8 items-start mt-11 text-base tracking-wider text-center text-black max-md:mt-10 max-md:max-w-full">
        {products.map((product, index) => (
          <ProductGridCard
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            color={product.color}
          />
        ))}
      </div>
    </div>
  );
};
