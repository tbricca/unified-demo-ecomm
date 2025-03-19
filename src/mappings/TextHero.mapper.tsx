import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import TextHero from "@/components/Hero/TextHero";

// ❖ TextHero
interface FigmaTextHeroProps extends BaseFigmaProps {
  Title?: string;
}

// Read more at https://www.builder.io/c/docs/mapping-functions
figmaMapping({
  componentKey: "f8c3fb47ed574f8b04480dc090827d93b1937278",
  mapper(figma: FigmaTextHeroProps) {
    return <TextHero title={figma.Title ?? "SHOP OUR FAVORITES"} />;
  },
});
