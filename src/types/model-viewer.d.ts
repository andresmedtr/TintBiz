// types/model-viewer.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    "model-viewer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string;
      alt?: string;
      poster?: string;
      ar?: boolean;
      "auto-rotate"?: boolean;
      "camera-controls"?: boolean;
      "environment-image"?: string;
      "shadow-intensity"?: string;
    };
  }
}
