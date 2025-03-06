"use client";

import * as React from "react";
import { toast } from "sonner";
import type { ReactNode } from "react";

// Maximum number of toasts
const TOAST_LIMIT = 3;

// Define Toast Types
type ToastType = "success" | "error" | "info" | "warning";

// Define Toast Properties
type ToastProps = {
  id: string;
  title?: string;
  description?: string;
  type?: ToastType;
  action?: {
    label: string;
    onClick: () => void;
  };
};

// Define State & Actions
type Action =
  | { type: "ADD_TOAST"; toast: ToastProps }
  | { type: "REMOVE_TOAST"; toastId: string };

interface State {
  toasts: ToastProps[];
}

type ToastContextType = {
  toast: (props: ToastProps) => void;
};

const ToastContext = React.createContext<ToastContextType | undefined>(
  undefined
);

// Provider Component
export function ToastProvider(props: { children: ReactNode }) {
  const showToast = React.useCallback((toastProps: ToastProps) => {
    toast(toastProps.title, {
      description: toastProps.description,
      action: toastProps.action
        ? {
            label: toastProps.action.label,
            onClick: toastProps.action.onClick,
          }
        : undefined,
    });
  }, []);

  const contextValue = React.useMemo(
    () => ({
      toast: showToast,
    }),
    [showToast]
  );

  return React.createElement(
    ToastContext.Provider,
    { value: contextValue },
    props.children
  );
}

// Custom Hook to Use Toasts
export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
