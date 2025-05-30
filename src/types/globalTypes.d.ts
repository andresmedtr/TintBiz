export interface QuoteFormFields {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface InputFieldsProps {
  id: string;
  label: string;
}

export interface ModelViewerProps {
  src: string;
  alt?: string;
  autoRotate?: boolean;
  cameraControls?: boolean;
  ar?: boolean;
  className?: string;
  width: string;
  height: string;
}
