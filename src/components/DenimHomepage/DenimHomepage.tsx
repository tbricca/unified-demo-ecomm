"use client";

import * as React from "react";
import TextHero from "@/components/Hero/TextHero";
import SplitHero from "@/components/Hero/SplitHero";
import { ProductItem } from "./ProductItem";
import ProductCard from "@/src/components/Card/ProductCard";

interface DenimHomepageProps {
  title?: string;
  stepIntoTitle?: string;
  shopFavoritesTitle?: string;
  shopAllButtonText?: string;
  notYourMothersDenimTitle?: string;
  notYourMothersDenimSubtitle?: string;
}

function DenimHomepage({
  title = "SHOPAHOLIC NOW HAS DENIM",
  stepIntoTitle = "STEP INTO FRESH STYLES",
  shopFavoritesTitle = "SHOP OUR FAVORITES",
  shopAllButtonText = "SHOP ALL",
  notYourMothersDenimTitle = "NOT YOUR MOTHERS DENIM",
  notYourMothersDenimSubtitle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere erat a ante vestibulum, in volutpat ligula elementum. Mauris scelerisque, ex ac fringilla auctor, nulla erat tempus enim, vel tincidunt arcu turpis vel enim.",
}: DenimHomepageProps) {
  return (
    <main>
      <section className="flex flex-col items-center w-full max-md:max-w-full">
        <div className="max-w-full w-[1200px]">
          <div className="flex relative flex-col justify-center items-end px-20 py-60 w-full rounded-lg min-h-[588px] max-md:py-24 max-md:pl-5 max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/63f2ce2bdfab4e1fa0343b7d8a43d1d9/d3975d372883951433957e5d052146777db8f5349154b3af9eb18074885496ba?placeholderIfAbsent=true"
              alt="Denim collection hero image"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative flex-col items-end mb-0 max-w-full w-[573px] max-md:mb-2.5">
              <h1 className="text-4xl text-white tracking-[7.14px] max-md:max-w-full">
                {title}
              </h1>
              <button className="gap-2.5 self-stretch px-5 py-2.5 mt-5 text-base text-black bg-white min-h-[43px] tracking-[3.15px]">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center mt-24 w-full max-md:mt-10 max-md:max-w-full">
        <TextHero title={stepIntoTitle} />

        <div className="flex overflow-hidden flex-wrap gap-6 items-start mt-11 max-w-full text-base tracking-wider text-center w-[1198px] max-md:mt-10">
          <ProductItem
            image="https://cdn.builder.io/api/v1/image/assets/63f2ce2bdfab4e1fa0343b7d8a43d1d9/69173b000a0e6df54e5c3924143546bab3c8d9138c39d57cf880a8303e02d46d?placeholderIfAbsent=true"
            name="Checker Fleece"
            price="$92"
            color="Soft Blue"
          />
          <ProductItem
            image="https://cdn.builder.io/api/v1/image/assets/63f2ce2bdfab4e1fa0343b7d8a43d1d9/463bfd6201a48079b1e6dd7a08114013946f6e7c62a074a098f3d4045808229d?placeholderIfAbsent=true"
            name="Fog Linen Jacket"
            price="$134"
            color="Soft Blue"
          />
          <ProductItem
            image="https://cdn.builder.io/api/v1/image/assets/63f2ce2bdfab4e1fa0343b7d8a43d1d9/feec62438114a53b1e44e5c519315710103b4ca88f9920dac17425d4fcc71d75?placeholderIfAbsent=true"
            name="Angular Sunglasses"
            price="$31"
            color="Rose"
          />
        </div>

        <SplitHero
          imageAlignment="right"
          textAlignment="left"
          splitWidth="1/2"
          title={notYourMothersDenimTitle}
          subTitle={notYourMothersDenimSubtitle}
          image="https://cdn.builder.io/api/v1/image/assets%2Fa87584e551b6472fa0f0a2eb10f2c0ff%2F0cde6f8ddd9d482fad53266f8ee0f3ce"
          altText="Sustainable Jeans"
          buttonText="Learn More"
          buttonLink="#"
          shrinkImage="shrink"
          hasCTA
        />

        <section className="flex flex-col justify-center items-center mt-11 max-md:mt-10 max-md:max-w-full">
          <TextHero title={shopFavoritesTitle} />

          <div className="flex flex-wrap gap-8 items-start mt-16 max-md:mt-10 max-md:max-w-full">
            {[...Array(4)].map((_, index) => (
              <ProductCard
                key={index}
                commercetoolsProduct=""
                dataSource="Builder"
                shopifyProductHandle=""
                className="w-[339px]"
                product={{
                  "@type": "@builder.io/core:Reference",
                  id: "63f2ce2bdfab4e1fa0343b7d8a43d1d9_088c35a5a6914ac68b99a4ea12abba6a",
                  model: "product-data",
                }}
              />
            ))}
          </div>

          <button className="gap-2.5 self-stretch px-5 py-2.5 mt-16 text-base font-semibold text-white bg-black tracking-[3.15px] max-md:mt-10">
            {shopAllButtonText}
          </button>
        </section>
      </section>
    </main>
  );
}

export default DenimHomepage;
