"use client";
import * as React from "react";

interface GreenlightSplitHeroProps {
  title?: string;
  description?: string;
  buttonText?: string;
  imageSrc?: string;
  imagePosition?: "left" | "right";
}

function GreenlightSplitHero({
  title = "NOT YOUR MOTHERS DENIM",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam posuere erat a ante vestibulum, in volutpat ligula elementum. Mauris scelerisque, ex ac fringilla auctor, nulla erat tempus enim, vel tincidunt arcu turpis vel enim.",
  buttonText = "Learn More",
  imageSrc = "https://cdn.builder.io/api/v1/image/assets/TEMP/850a6f8e-8f2c-4ba7-9e42-8a2c5c72e58c?apiKey=a05c6109e97c4bde98e757ca99d37c45",
  imagePosition = "right",
}: GreenlightSplitHeroProps) {
  const ImageElement = (
    <img
      src={imageSrc}
      alt="Hero section featured image"
      className="object-contain self-stretch my-auto rounded-lg aspect-[1.05] min-w-60 w-[470px] max-md:max-w-full"
    />
  );

  const ContentElement = (
    <article className="flex flex-col self-stretch my-auto min-w-60 w-[685px] max-md:max-w-full">
      <h1 className="text-2xl tracking-[5.25px] max-md:max-w-full">{title}</h1>
      <p className="mt-12 text-lg max-md:mt-10 max-md:max-w-full">
        {description}
      </p>
      <button
        className="gap-2.5 self-start px-5 py-2.5 mt-12 text-base bg-slate-300 tracking-[3.15px] max-md:mt-10 hover:bg-slate-400 transition-colors duration-200"
        aria-label={buttonText}
      >
        {buttonText}
      </button>
    </article>
  );

  return (
    <section
      className="flex flex-wrap gap-10 items-center font-semibold text-black bg-white max-md:flex-col"
      role="region"
      aria-label="Hero Section"
    >
      {imagePosition === "left" ? ImageElement : ContentElement}
      {imagePosition === "left" ? ContentElement : ImageElement}
    </section>
  );
}

export default GreenlightSplitHero;
