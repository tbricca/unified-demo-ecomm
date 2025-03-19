"use client";

import * as React from "react";

interface JournalCardProps {
  imageUrl?: string;
  imageAlt?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaUrl?: string;
  loginUrl?: string;
}

export default function JournalCard({
  imageUrl = "https://www.assh.org/hande/servlet/servlet.FileDownload?file=00P0a00000lMQOyEAO",
  imageAlt = "Articles from JHS",
  title = "Journal of Hand Surgery",
  description = "The official journal from ASSH.",
  ctaText = "Access JHS",
  ctaUrl = "#",
  loginUrl = "https://www.assh.org/s/login?starturl=https://www.jhandsurg.org",
}: JournalCardProps) {
  return (
    <article className="shrink-0 p-2.5 mb-4 w-full max-w-sm text-base leading-6">
      <div className="text-base leading-6 transition-transform duration-[0.2s]">
        <p className="mb-3 text-base leading-6 text-center">
          <a
            href={loginUrl}
            className="inline text-base leading-6 text-center text-cyan-700 border-cyan-700 ease-linear cursor-pointer decoration-cyan-700 duration-[0.1s] outline-cyan-700 transition-[color]"
            aria-label={`View ${title}`}
          >
            <img
              src={imageUrl}
              alt={imageAlt}
              className="inline mb-3 max-w-full text-base leading-6 text-center text-cyan-700 align-middle border-cyan-700 cursor-pointer decoration-cyan-700 outline-cyan-700 overflow-x-clip overflow-y-clip"
            />
          </a>
        </p>
      </div>
      <h3 className="mb-4 text-xl leading-8 text-center text-cyan-700 uppercase border-cyan-700 ease-linear cursor-pointer decoration-cyan-700 duration-[0.1s] outline-cyan-700 transition-[color]">
        {title}
      </h3>
      <p className="mb-3 text-base leading-6 text-center">{description}</p>
      <div className="text-base leading-6 transition-transform duration-[0.2s]">
        <p className="pt-1.5 mb-3 text-base leading-6 text-center">
          <a
            href={ctaUrl}
            className="relative inline-block px-3 py-1.5 text-base leading-8 text-center text-white bg-cyan-700 border border-t border-r border-b border-l border-cyan-700 border-solid ease-linear cursor-pointer outline-white select-none decoration-white duration-[0.15s] transition-[border]"
            role="button"
            aria-label={`${ctaText} - ${title}`}
          >
            {ctaText}
          </a>
        </p>
      </div>
    </article>
  );
}
