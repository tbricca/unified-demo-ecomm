"use client";

import * as React from "react";

interface DialogProps {
  title?: string;
  subtitle?: string;
  onClose?: () => void;
  onSave?: () => void;
  onCancel?: () => void;
  entity?: string;
  gridComponents?: React.ReactNode[];
  required?: boolean;
}

const DialogButton: React.FC<{
  variant?: "primary" | "secondary";
  onClick?: () => void;
  children: React.ReactNode;
}> = ({ variant = "secondary", onClick, children }) => {
  const baseClasses =
    "overflow-hidden gap-1 self-stretch px-2 py-1 my-auto rounded-lg text-sm font-medium leading-6 capitalize whitespace-nowrap";
  const variantClasses =
    variant === "primary"
      ? "text-white bg-blue-700"
      : "bg-white border border-solid border-neutral-200 text-neutral-700";

  return (
    <button className={`${baseClasses} ${variantClasses}`} onClick={onClick}>
      {children}
    </button>
  );
};

const DialogDivider: React.FC = () => (
  <div className="flex flex-col justify-center mt-4 w-full min-h-0.5">
    <hr className="flex w-full bg-zinc-100 min-h-px" />
  </div>
);

const DialogHeader: React.FC<{
  title?: string;
  subtitle?: string;
  onClose?: () => void;
}> = ({
  title = "Dialog Title",
  subtitle = "Descriptive subtitle",
  onClose,
}) => (
  <header className="w-full">
    <div className="flex items-start w-full">
      <div className="flex-1 shrink basis-0 min-w-60">
        <h2 className="text-base font-medium tracking-normal text-stone-900">
          {title}
        </h2>
        <p className="text-sm tracking-normal leading-none whitespace-nowrap text-ellipsis text-neutral-700">
          {subtitle}
        </p>
      </div>
      <div className="flex gap-1 items-start w-8">
        <button
          className="flex flex-col justify-center items-center p-1.5 w-8 rounded-lg min-h-8"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <div className="flex justify-center items-center w-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/63f2ce2bdfab4e1fa0343b7d8a43d1d9/d912855469ac245ee4eb2f4cc16d3d2671cfdd5c2031521cac882ccdf079469d?placeholderIfAbsent=true"
              alt="Close"
              className="object-contain self-stretch my-auto w-5 aspect-square"
            />
          </div>
        </button>
      </div>
    </div>
  </header>
);

const DialogGrid: React.FC<{
  components?: React.ReactNode[];
}> = ({ components = Array(8).fill("Replace component") }) => (
  <div className="overflow-hidden mt-4 w-full text-base tracking-normal leading-6 text-center text-neutral-700">
    <div className="w-full">
      <div className="flex gap-2 items-start w-full">
        {components.slice(0, 4).map((component, index) => (
          <div
            key={`grid-1-${index}`}
            className="overflow-hidden flex-1 shrink px-4 py-2 rounded border border-dashed basis-0 bg-blue-700 bg-opacity-0 border-neutral-200"
          >
            {component}
          </div>
        ))}
      </div>
    </div>
    <div className="mt-4 w-full">
      <div className="flex gap-2 items-start w-full">
        {components.slice(4, 8).map((component, index) => (
          <div
            key={`grid-2-${index}`}
            className="overflow-hidden flex-1 shrink px-4 py-2 rounded border border-dashed basis-0 bg-blue-700 bg-opacity-0 border-neutral-200"
          >
            {component}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Dialog: React.FC<DialogProps> = ({
  title,
  subtitle,
  onClose,
  onSave,
  onCancel,
  entity = "entity",
  gridComponents,
  required = true,
}) => {
  return (
    <div
      role="dialog"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      className="overflow-hidden px-5 py-4 bg-white rounded-lg border border-solid shadow-lg border-[color:var(--Color-Other-Outlined-Border,#E0E0E0)] max-w-[444px] max-md:max-w-[639px]"
    >
      <DialogHeader title={title} subtitle={subtitle} onClose={onClose} />

      <DialogDivider />

      <div
        id="dialog-description"
        className="flex-1 shrink gap-1 mt-4 w-full text-base tracking-normal leading-6 basis-0 text-stone-900"
      >
        Are you sure you want to permanently delete this {entity} and all it's
        content?{" "}
        <span className="text-[#C73623]">This action is irreversible!</span>
      </div>

      <DialogGrid components={gridComponents} />

      <DialogDivider />

      <footer className="flex gap-2 items-center mt-4 w-full tracking-wide">
        {required && (
          <p className="flex-1 shrink gap-2 self-stretch my-auto text-xs leading-loose basis-0 min-w-60 text-ellipsis text-neutral-700">
            Fields with an asterisk (*) are required
          </p>
        )}
        <div className="flex overflow-hidden gap-2 items-center self-stretch my-auto">
          <DialogButton onClick={onCancel}>Cancel</DialogButton>
          <DialogButton variant="primary" onClick={onSave}>
            Save
          </DialogButton>
        </div>
      </footer>
    </div>
  );
};

export default Dialog;
