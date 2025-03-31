import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import DeluxeInputDropdown from "@/components/deluxe/DeluxeInputDropdown";

// ❖ input-dropdown
interface FigmaInputDropdownProps extends BaseFigmaProps {
  "show-alert-text"?: boolean;
  "show-value"?: boolean;
  "show-helper-text"?: boolean;
  "show-label"?: boolean;
  "show-required"?: boolean;
  "show-dropdown-menu"?: boolean;
  state?:
    | "neutral"
    | "success"
    | "warning"
    | "information"
    | "error"
    | "disabled";
  menu?: "open" | "closed";
  value?: "unselected" | "selected";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  // componentName: "input-dropdown",
  componentKey: "c1d171f429572cbd5512237e382ce08a319b54d0",
  mapper(figma: FigmaInputDropdownProps) {
    // Map state to variant, defaulting to neutral
    const variant = figma.state === "success" ? "success" : "neutral";

    // Get label text if show-label is true
    const labelNode = figma["show-label"]
      ? figma.$findOneByName("Label")?.["$textContent"]
      : undefined;

    // Handle error states
    const error =
      figma.state === "error" ||
      figma.state === "warning" ||
      figma.state === "information"
        ? figma.$findOneByName("Helper Text")?.$textContent
        : undefined;

    // Handle value
    const value =
      figma.value === "selected"
        ? figma.$findOneByName("Value")?.$textContent
        : undefined;

    return (
      <DeluxeInputDropdown
        variant={variant}
        label={labelNode}
        value={value}
        disabled={figma.state === "disabled"}
        error={error}
        required={figma["show-required"]}
        placeholder={figma.$findOneByName("Placeholder")?.$textContent}
      >
        {figma["show-dropdown-menu"] && figma.$children}
      </DeluxeInputDropdown>
    );
  },
});
