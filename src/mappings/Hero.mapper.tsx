import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import ImageHero from "@/components/Hero/ImageHero";

// ❖ Hero
interface FigmaHeroProps extends BaseFigmaProps {
  buttonText?: string;
  Title?: string;
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "14fb10e260863d782b6dbc3cdac1d13ea73c1d07",
  mapper(figma: FigmaHeroProps) {
    const backgroundImageNode = figma.$findOneByName(
      "tamara-bellis-IwVRO3TLjLc-unsplash 1"
    );

    return (
      <ImageHero
        title={figma.Title ?? ""}
        buttonText={figma.buttonText ?? "Shop Now"}
        buttonLink="/"
        backgroundImage={backgroundImageNode?.$imageUrl ?? ""}
        alignment="center"
        makeFullBleed={false}
      />
    );
  },
});
