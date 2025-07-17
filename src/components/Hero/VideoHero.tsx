import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';

interface VideoHeroProps {
  title: string;
  subTitle?: string;
  buttonText: string;
  buttonLink: string;
  videoUrl: string;
  alignment: 'left' | 'center' | 'right';
  makeFullBleed: boolean;
}

const VideoHero: React.FC<VideoHeroProps> = ({
  title,
  subTitle,
  buttonText,
  buttonLink,
  videoUrl,
  alignment,
  makeFullBleed
}) => {
  const alignmentClasses = {
    left: 'md:items-start md:text-left',
    center: 'md:items-center md:text-center',
    right: 'md:items-end md:text-right',
  };

  return (
    <div className={`flex overflow-hidden rounded-md mt-4 relative flex-col justify-center ${alignmentClasses[alignment]} w-full min-h-[442px] max-md:pr-5 max-md:max-w-full ${makeFullBleed ? 'w-screen  ml-[calc(50%-50vw)] max-h-full' : ''}`}>
      <video
        className="object-cover absolute inset-0 size-full"
        src={videoUrl}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className={`flex relative flex-col justify-center md:px-16 py-20 max-w-full md:w-2/3 max-md:px-5 items-center text-center ${alignmentClasses[alignment]}`}>
        <div className={`flex flex-col mt-8 mb-2.5 shadow-sm max-md:mr-1 max-md:max-w-full items-center text-center ${alignmentClasses[alignment]}`}>
          <div className="flex flex-col text-white max-md:max-w-full">
            <h2 className="mt-6 text-2xl tracking-[5.25px] max-md:max-w-full font-medium">
              {title}
            </h2>
            <div className="mt-2 text-xl leading-9 max-md:max-w-full" dangerouslySetInnerHTML={{ __html: subTitle || "" }}>
            </div>
          </div>
          <Button variant="white" className="self-start px-5 py-2.5 mt-2 text-base tracking-[3.15px] max-md:mt-10" asChild>
            <Link href={buttonLink}>{buttonText}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VideoHero;