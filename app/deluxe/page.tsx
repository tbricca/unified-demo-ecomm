"use client";

import DeluxeTable from "@/src/components/deluxe/DeluxeTable";
import { DeluxeAction } from "@/src/components/deluxe/DeluxeAction";

export default function DeluxePage() {
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
      <h1 className="text-3xl font-bold mb-8">Deluxe Components Preview</h1>

      <div className="space-y-12">
        <section>
          <h2 className="text-xl font-semibold mb-6">Deluxe Action Examples</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Default Action</h3>
              <DeluxeAction label="Action" />
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Custom Icons</h3>
              <div className="space-y-4">
                <DeluxeAction
                  label="Custom Left Icon"
                  leftIcon={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                        fill="currentColor"
                      />
                    </svg>
                  }
                />
                <DeluxeAction
                  label="Custom Right Icon"
                  rightIcon={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 5V19L20 12L9 5Z" fill="currentColor" />
                    </svg>
                  }
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Icon Visibility Controls</h3>
              <div className="space-y-4">
                <DeluxeAction
                  label="No Left Icon"
                  showLeftIcon={false}
                />
                <DeluxeAction
                  label="No Right Icon"
                  showRightIcon={false}
                />
                <DeluxeAction
                  label="Text Only"
                  showLeftIcon={false}
                  showRightIcon={false}
                />
                <DeluxeAction
                  label="Custom Left, No Right"
                  leftIcon={
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                        fill="currentColor"
                      />
                    </svg>
                  }
                  showRightIcon={false}
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">No Icons (Old Method)</h3>
              <DeluxeAction
                label="Text Only (Legacy)"
                leftIcon={null}
                rightIcon={null}
              />
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Custom Styles</h3>
              <div className="space-y-4">
                <DeluxeAction
                  label="Custom Color"
                  className="text-green-600 hover:text-green-700"
                />
                <DeluxeAction label="Larger Text" className="text-lg" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Deluxe Table Preview</h2>
          <div className="space-y-12">
            <section>
              <h3 className="text-lg font-medium mb-4">Default Table</h3>
              <DeluxeTable
                onRowSelect={handleRowSelect}
                onRowExpand={handleRowExpand}
                onDownload={handleDownload}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </section>

            <section>
              <h3 className="text-lg font-medium mb-4">
                Table with Custom Class
              </h3>
              <DeluxeTable
                className="bg-gray-50"
                onRowSelect={handleRowSelect}
                onRowExpand={handleRowExpand}
                onDownload={handleDownload}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}
