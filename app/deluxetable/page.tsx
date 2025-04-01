"use client";

import React from "react";
import DeluxeTable from "@/src/components/deluxe/DeluxeTable";

export default function DeluxeTablePage() {
  const handleRowSelect = (selectedIds: string[]) => {
    console.log("Selected rows:", selectedIds);
  };

  const handleRowExpand = (rowId: string) => {
    console.log("Expanded row:", rowId);
  };

  const handleDownload = (rowId: string) => {
    console.log("Download row:", rowId);
  };

  const handleEdit = (rowId: string) => {
    console.log("Edit row:", rowId);
  };

  const handleDelete = (rowId: string) => {
    console.log("Delete row:", rowId);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">DeluxeTable Preview</h1>
      <DeluxeTable
        onRowSelect={handleRowSelect}
        onRowExpand={handleRowExpand}
        onDownload={handleDownload}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
