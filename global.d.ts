export {};

declare global {
  interface Window {
    Calendly?: {
      initInlineWidgets: () => void;
    };
  }
}