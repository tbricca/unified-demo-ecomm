"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface DeluxeActionProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  className?: string;
}

const DeluxeAction = React.forwardRef<HTMLButtonElement, DeluxeActionProps>(
  ({ 
    label, 
    leftIcon, 
    rightIcon, 
    showLeftIcon = true, 
    showRightIcon = false, 
    className, 
    ...props 
  }, ref) => {
    const defaultRightIcon = (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[24px] h-[24px] relative"
      >
        <path
          d="M13.4618 12L9.29389 7.80269C9.09796 7.60538 9 7.35426 9 7.04933C9 6.74439 9.09796 6.49327 9.29389 6.29596C9.48982 6.09865 9.73919 6 10.042 6C10.3448 6 10.5941 6.09865 10.7901 6.29596L15.7061 11.2466C15.813 11.3543 15.8887 11.4709 15.9332 11.5964C15.9777 11.722 16 11.8565 16 12C16 12.1435 15.9777 12.278 15.9332 12.4036C15.8887 12.5291 15.813 12.6457 15.7061 12.7534L10.7901 17.704C10.5941 17.9013 10.3448 18 10.042 18C9.73919 18 9.48982 17.9013 9.29389 17.704C9.09796 17.5067 9 17.2556 9 16.9507C9 16.6457 9.09796 16.3946 9.29389 16.1973L13.4618 12Z"
          fill="currentColor"
        />
      </svg>
    );

    const defaultLeftIcon = (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[24px] h-[24px] relative"
      >
        <path
          d="M12 16.2C13.1547 16.2 14.1363 15.7917 14.9446 14.975C15.7529 14.1583 16.157 13.1667 16.157 12C16.157 10.8333 15.7529 9.84167 14.9446 9.025C14.1363 8.20833 13.1547 7.8 12 7.8C10.8453 7.8 9.86374 8.20833 9.05543 9.025C8.24711 9.84167 7.84296 10.8333 7.84296 12C7.84296 13.1667 8.24711 14.1583 9.05543 14.975C9.86374 15.7917 10.8453 16.2 12 16.2ZM12 14.52C11.3072 14.52 10.7182 14.275 10.2333 13.785C9.74827 13.295 9.50577 12.7 9.50577 12C9.50577 11.3 9.74827 10.705 10.2333 10.215C10.7182 9.725 11.3072 9.48 12 9.48C12.6928 9.48 13.2818 9.725 13.7667 10.215C14.2517 10.705 14.4942 11.3 14.4942 12C14.4942 12.7 14.2517 13.295 13.7667 13.785C13.2818 14.275 12.6928 14.52 12 14.52ZM12 19C9.85989 19 7.90454 18.4283 6.13395 17.285C4.36336 16.1417 3.02386 14.5978 2.11547 12.6533C2.06928 12.5756 2.03849 12.4783 2.02309 12.3617C2.0077 12.245 2 12.1244 2 12C2 11.8756 2.0077 11.755 2.02309 11.6383C2.03849 11.5217 2.06928 11.4244 2.11547 11.3467C3.02386 9.40222 4.36336 7.85833 6.13395 6.715C7.90454 5.57167 9.85989 5 12 5C14.1401 5 16.0955 5.57167 17.8661 6.715C19.6366 7.85833 20.9761 9.40222 21.8845 11.3467C21.9307 11.4244 21.9615 11.5217 21.9769 11.6383C21.9923 11.755 22 11.8756 22 12C22 12.1244 21.9923 12.245 21.9769 12.3617C21.9615 12.4783 21.9307 12.5756 21.8845 12.6533C20.9761 14.5978 19.6366 16.1417 17.8661 17.285C16.0955 18.4283 14.1401 19 12 19ZM12 17.1333C13.7398 17.1333 15.3372 16.6706 16.7921 15.745C18.2471 14.8194 19.3595 13.5711 20.1293 12C19.3595 10.4289 18.2471 9.18056 16.7921 8.255C15.3372 7.32944 13.7398 6.86667 12 6.86667C10.2602 6.86667 8.66282 7.32944 7.20785 8.255C5.75289 9.18056 4.64049 10.4289 3.87067 12C4.64049 13.5711 5.75289 14.8194 7.20785 15.745C8.66282 16.6706 10.2602 17.1333 12 17.1333Z"
          fill="currentColor"
        />
      </svg>
    );

    // Determine which icons to display
    const renderLeftIcon = showLeftIcon ? (leftIcon !== undefined ? leftIcon : defaultLeftIcon) : null;
    const renderRightIcon = showRightIcon ? (rightIcon !== undefined ? rightIcon : defaultRightIcon) : null;

    return (
      <button
        ref={ref}
        className={cn(
          "flex relative gap-2 justify-center items-center h-10 text-blue-600 hover:text-blue-700 transition-colors",
          className,
        )}
        {...props}
      >
        {renderLeftIcon}
        <span className="relative text-base text-center">{label}</span>
        {renderRightIcon}
      </button>
    );
  },
);

DeluxeAction.displayName = "DeluxeAction";

export { DeluxeAction };
