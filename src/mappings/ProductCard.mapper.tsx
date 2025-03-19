import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import ProductCard from "@/src/components/Card/ProductCard";

// ❖ ProductCard
interface FigmaProductCardProps extends BaseFigmaProps {
  exampleProduct?: {
    "@type": "@builder.io/core:Reference";
    id: string;
    model: string;
  }
}

figmaMapping({
  componentKey: "260489e060b7d44e51be9e610dd51818121b42fd",
  mapper(figma: FigmaProductCardProps) {
    const exampleProduct = figma.exampleProduct ?? {
      "@type": "@builder.io/core:Reference",
      id: "63f2ce2bdfab4e1fa0343b7d8a43d1d9_088c35a5a6914ac68b99a4ea12abba6a",
      model: "product-data",
    };
    
    return (
      <ProductCard
        commercetoolsProduct=""
        dataSource="Builder"
        product={exampleProduct}
        shopifyProductHandle=""
      />
    );
  },
});
