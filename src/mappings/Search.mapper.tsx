import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import SearchBox from "@/components/deluxe/SearchBox";

// ❖ search
interface FigmaSearchProps extends BaseFigmaProps {
  "show-dropdown-auto-complete-menu"?: boolean;
  "search-value"?: string;
  "placeholder-text"?: string;
  "show-helper-text"?: boolean;
  "helper-text"?: string;
  state?: "neutral" | "active" | "disabled";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  // componentName: "search",
  componentKey: "bac088b93e3ce77acaec4a8ebd8e95fd1a83ddfa",
  mapper(figma: FigmaSearchProps) {
    return (
      <SearchBox placeholder={figma["placeholder-text"] ?? "Search..."}>
        {figma["show-helper-text"] && figma["helper-text"] && (
          <span>{figma["helper-text"]}</span>
        )}
      </SearchBox>
    );
  },
});
