"use client";

import * as React from "react";

interface YSplitHeroProps {
  title?: string;
  description?: string;
  buttonText?: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  showButton?: boolean;
}

const ySplitHero: React.FC<YSplitHeroProps> = ({
  title = "NOT YOUR MOTHERS DENIM",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere erat a ante vestibulum, in volutpat ligula elementum. Mauris scelerisque, ex ac fringilla auctor, nulla erat tempus enim, vel tincidunt arcu turpis vel enim.",
  buttonText = "Learn More",
  imageSrc = "https://cdn.builder.io/api/v1/image/assets/63f2ce2bdfab4e1fa0343b7d8a43d1d9/539b4f8a1dc54a9c6c0e64c7ab487c9ef0bdc85f02e5c8f4eb576a3124d4479a?placeholderIfAbsent=true",
  imageAlt = "Hero image",
  imagePosition = "right",
  showButton = true,
}) => {
  const ContentSection = (
    <div className="flex flex-col self-stretch my-auto min-w-60 w-[685px] max-md:max-w-full">
      <h1 className="text-2xl tracking-[5.25px] max-md:max-w-full">{title}</h1>
      <p className="mt-12 text-lg max-md:mt-10 max-md:max-w-full">
        {description}
      </p>
      {showButton && (
        <button
          className="gap-2.5 self-start px-5 py-2.5 mt-12 text-base bg-slate-300 tracking-[3.15px] max-md:mt-10 hover:bg-slate-400 transition-colors duration-200"
          aria-label={buttonText}
        >
          {buttonText}
        </button>
      )}
    </div>
  );

  const ImageSection = (
    <img
      src={imageSrc}
      alt={imageAlt}
      className="object-contain self-stretch my-auto rounded-lg aspect-[1.05] min-w-60 w-[470px] max-md:max-w-full"
    />
  );

  return (
    <section
      className="flex flex-wrap gap-10 items-center font-semibold text-black bg-white"
      role="region"
      aria-label="Split Hero Section"
    >
      {imagePosition === "left" ? (
        <>
          {ImageSection}
          {ContentSection}
        </>
      ) : (
        <>
          {ContentSection}
          {ImageSection}
        </>
      )}
    </section>
  );
};

export default ySplitHero;
