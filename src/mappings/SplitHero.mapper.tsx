import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import SplitHero from "@/src/components/Hero/SplitHero";

// ❖ SplitHero
interface FigmaSplitHeroProps extends BaseFigmaProps {
  ButtonText?: string;
  Subtitle?: string;
  imageUrl?: string;
  Title?: string;
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "06a3a922620c3c62e1365c646dab3eed590c1e46",
  mapper(figma: FigmaSplitHeroProps) {
    return (
      <SplitHero
        imageAlignment="right"
        textAlignment="left"
        splitWidth="1/3"
        title={figma.Title ?? ""}
        subTitle={figma.Subtitle ?? ""}
        image={figma.imageUrl ?? ""}
        altText="Hero Image"
        hasCTA={!!figma.ButtonText}
        buttonText={figma.ButtonText}
        buttonLink="#"
        makeFullBleed={false}
        shrinkImage="shrink"
      />
    );
  },
});
