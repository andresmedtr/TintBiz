export interface QuoteFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export type ContactInfoItems = {
  icon: ReactNode;
  text: string;
};

export interface InputFieldConfig {
  id: keyof QuoteFormValues;
  label: string;
  multiline?: boolean;
  type?: string;
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

export interface SwitchContextType {
  isActive: boolean;
  toggle: () => void;
}

export interface TintLevelProps {
  name: string;
  description: string;
  tone: string;
}
