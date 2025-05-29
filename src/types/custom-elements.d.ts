declare namespace JSX {
  interface IntrinsicElements {
    "model-viewer": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      src: string;
      alt?: string;
      ar?: boolean;
      "auto-rotate"?: boolean;
      "camera-controls"?: boolean;
      exposure?: string;
      "shadow-intensity"?: string;
      style?: React.CSSProperties;
    };
  }
}
