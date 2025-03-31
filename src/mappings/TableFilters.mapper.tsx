import { figmaMapping, type BaseFigmaProps } from "@builder.io/dev-tools/figma";
import DeluxeTableFilters from "@/components/deluxe/DeluxeTableFilters";

// ❖ table-filters
interface FigmaTableFiltersProps extends BaseFigmaProps {
  "number of filters"?: "1 filter" | "2 filters" | "3 filters" | "4+ filters";
}

// Read more at https://www.builder.io/c/docs/mapping-functions
export default figmaMapping({
  // componentName: "table-filters",
  componentKey: "15a804524ce5935bd9ef0013502a6670a2d688c4",
  mapper(figma: FigmaTableFiltersProps) {
    const parseFilterCount = (filterStr?: string) => {
      if (!filterStr) return undefined;
      if (filterStr === "4+ filters") return 4;
      const match = filterStr.match(/(\d+)/);
      return match ? parseInt(match[1]) : undefined;
    };

    return (
      <DeluxeTableFilters
        numberOfFilters={parseFilterCount(figma["number of filters"])}
      />
    );
  },
});
