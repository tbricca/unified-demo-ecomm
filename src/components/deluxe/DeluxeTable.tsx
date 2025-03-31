"use client";

import * as React from "react";
import DeluxeValueInput from "./DeluxeValueInput";
import DeluxeInputDropdown from "./DeluxeInputDropdown";

export interface DeluxeTableRow {
  id: string;
  text: string;
  inputValue: string;
  selectValue?: string;
  numericValue: string;
}

export interface DeluxeTableProps {
  rows?: DeluxeTableRow[];
  onRowSelect?: (selectedIds: string[]) => void;
  onRowExpand?: (rowId: string) => void;
  onDownload?: (rowId: string) => void;
  onEdit?: (rowId: string) => void;
  onDelete?: (rowId: string) => void;
  className?: string;
}

const DeluxeTable: React.FC<DeluxeTableProps> = ({
  rows = [],
  onRowSelect,
  onRowExpand,
  onDownload,
  onEdit,
  onDelete,
  className,
}) => {
  const [selectedRows, setSelectedRows] = React.useState<Set<string>>(
    new Set(),
  );
  const [allSelected, setAllSelected] = React.useState(false);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const newSelected = new Set(rows.map((row) => row.id));
      setSelectedRows(newSelected);
      setAllSelected(true);
      onRowSelect?.(Array.from(newSelected));
    } else {
      setSelectedRows(new Set());
      setAllSelected(false);
      onRowSelect?.([]);
    }
  };

  const handleRowSelect = (rowId: string, checked: boolean) => {
    const newSelected = new Set(selectedRows);
    if (checked) {
      newSelected.add(rowId);
    } else {
      newSelected.delete(rowId);
    }
    setSelectedRows(newSelected);
    setAllSelected(newSelected.size === rows.length);
    onRowSelect?.(Array.from(newSelected));
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <div className={`bg-white min-h-[screen] ${className || ""}`}>
        <div className="px-4 mx-auto max-w-[1136px]">
          <div className="w-full">
            <div className="flex gap-4 items-center py-2 border border-b">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300"
                />
              </div>
              <div className="flex-1 text-sm leading-5 text-gray-900">
                Column label
              </div>
              <div className="flex-1 text-sm leading-5 text-gray-900">
                Column label
              </div>
              <div className="flex-1 text-sm leading-5 text-gray-900">
                Column label
              </div>
              <div className="flex-1 text-sm leading-5 text-gray-900">
                Column label
              </div>
            </div>
            <div className="border-b">
              {Array.from({ length: 10 }, (_, index) => (
                <div key={index} className="flex gap-4 items-center py-2">
                  <div className="flex gap-2 items-center">
                    <i
                      className="ti ti-chevron-down text-gray-400 cursor-pointer"
                      onClick={() => onRowExpand?.(`row-${index}`)}
                    />
                    <input
                      type="checkbox"
                      checked={selectedRows.has(`row-${index}`)}
                      onChange={(e) =>
                        handleRowSelect(`row-${index}`, e.target.checked)
                      }
                      className="w-4 h-4 rounded border-gray-300"
                    />
                  </div>
                  <div className="flex-1 text-sm leading-5 text-gray-900">
                    Alphanumeric text
                  </div>
                  <div className="flex-1">
                    <DeluxeValueInput
                      containerClassName="max-w-full"
                      placeholder="Enter value..."
                    />
                  </div>
                  <div className="flex-1">
                    <DeluxeInputDropdown
                      containerClassName="max-w-full"
                      disabled
                      placeholder="Select..."
                    />
                  </div>
                  <div className="flex-1 text-sm leading-5 text-gray-900">
                    Numeric text
                  </div>
                  <div className="flex gap-2 items-center">
                    <i
                      className="ti ti-download text-gray-400 cursor-pointer"
                      onClick={() => onDownload?.(`row-${index}`)}
                    />
                    <i
                      className="ti ti-edit text-gray-400 cursor-pointer"
                      onClick={() => onEdit?.(`row-${index}`)}
                    />
                    <i
                      className="ti ti-trash text-gray-400 cursor-pointer"
                      onClick={() => onDelete?.(`row-${index}`)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DeluxeTable.displayName = "DeluxeTable";

export default DeluxeTable;
