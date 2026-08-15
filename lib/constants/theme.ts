/**
 * Design system tokens and theme constants
 * Centralized configuration for consistent styling
 */

export const COLORS = {
  // Neutrals
  white: "#ffffff",
  black: "#000000",
  
  // Gray scale
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },
  
  // Primary
  primary: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
  },
  
  // Status colors
  success: {
    50: "#f0fdf4",
    100: "#dcfce7",
    500: "#22c55e",
    600: "#16a34a",
    900: "#15803d",
  },
  
  warning: {
    50: "#fffbeb",
    100: "#fef3c7",
    500: "#eab308",
    600: "#ca8a04",
    900: "#854d0e",
  },
  
  error: {
    50: "#fef2f2",
    100: "#fee2e2",
    500: "#ef4444",
    600: "#dc2626",
    900: "#7f1d1d",
  },
  
  info: {
    50: "#eff6ff",
    100: "#dbeafe",
    500: "#3b82f6",
    600: "#2563eb",
    900: "#1e3a8a",
  },
};

export const SPACING = {
  0: "0",
  1: "0.25rem", // 4px
  2: "0.5rem", // 8px
  3: "0.75rem", // 12px
  4: "1rem", // 16px
  5: "1.25rem", // 20px
  6: "1.5rem", // 24px
  7: "1.75rem", // 28px
  8: "2rem", // 32px
  10: "2.5rem", // 40px
  12: "3rem", // 48px
  16: "4rem", // 64px
  20: "5rem", // 80px
  24: "6rem", // 96px
};

export const BREAKPOINTS = {
  xs: "320px",
  sm: "375px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1440px",
};

export const SHADOWS = {
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
};

export const BORDER_RADIUS = {
  none: "0",
  sm: "0.125rem", // 2px
  base: "0.25rem", // 4px
  md: "0.375rem", // 6px
  lg: "0.5rem", // 8px
  xl: "0.75rem", // 12px
  "2xl": "1rem", // 16px
  "3xl": "1.5rem", // 24px
  full: "9999px",
};

export const TRANSITIONS = {
  fast: "150ms",
  base: "200ms",
  slow: "300ms",
  slower: "500ms",
};

export const Z_INDEX = {
  hide: "-1",
  base: "0",
  dropdown: "1000",
  sticky: "1020",
  fixed: "1030",
  backdrop: "1040",
  offcanvas: "1050",
  modal: "1060",
  popover: "1070",
  tooltip: "1080",
};
