"use client";

import * as React from "react";

interface TestimonialCardProps {
  quote?: string;
  content?: string;
  author?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote = "Game changer",
  content = "I am blown away by the effectiveness of this software, My backtesting has improved in both quantity and quality. I am a funded trader today because of the background work I did on FX Replay.",
  author = "Riaan Arendse"
}) => {
  return (
    <section
      className="inline text-sm leading-5"
      role="region"
      aria-label="Testimonial"
    >
      <article
        className="flex overflow-x-hidden overflow-y-hidden relative shrink-0 gap-0 gap-y-0 gap-y-0 m-auto w-full text-sm leading-5 rounded-2xl border border-t border-r border-b border-l border-solid ease-in-out bg-zinc-800 border-zinc-700 duration-[0.3s] transition-[border]"
      >
        <div className="p-6 w-full text-sm leading-5">
          <figure className="gap-5 text-sm leading-5">
            <blockquote className="inline-block text-2xl leading-9">
              <p className="text-white">&quot;{quote}&quot;</p>
              <p
                className="box-border relative shrink-0 h-auto"
                style={{
                  color: 'rgb(176, 177, 180)',
                  fontFamily: '"Nunito Sans", ui-sans-serif, system-ui',
                  fontSize: '14px'
                }}
              >
                {content}
              </p>
            </blockquote>
            <figcaption>
              <p className="mb-2 text-sm font-thin leading-5 decoration-zinc-400 outline-zinc-400 text-zinc-400" />
              <p className="text-sm leading-5 decoration-zinc-400 outline-zinc-400 text-zinc-400">
                -{author}
              </p>
            </figcaption>
          </figure>
        </div>
      </article>
    </section>
  );
};

export default TestimonialCard;
