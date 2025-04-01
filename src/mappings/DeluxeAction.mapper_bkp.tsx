import {
  figmaMapping,
  type BaseFigmaProps,
  ChildrenNode,
} from "@builder.io/dev-tools/figma";
import { DeluxeAction } from "@/components/deluxe/DeluxeAction";

// ❖ button/tertiary
interface FigmaButtonTertiaryProps extends BaseFigmaProps {
  "Right icon"?: ChildrenNode;
  "Show left icon"?: boolean;
  Label?: string;
  "Left icon"?: ChildrenNode;
  "Show right icon"?: boolean;
  States?: "Default" | "Hover" | "Pressed" | "Disabled";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  // componentName: "button/tertiary",
  componentKey: "f975891618601e1bb43656eb65303616c32a1e32",
  mapper(figma: FigmaButtonTertiaryProps) {
    return (
      <DeluxeAction
        label={figma.Label ?? ""}
        leftIcon={figma["Left icon"]}
        rightIcon={figma["Right icon"]}
        showLeftIcon={figma["Show left icon"]}
        showRightIcon={figma["Show right icon"]}
      />
    );
  },
});
