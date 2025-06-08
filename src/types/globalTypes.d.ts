export interface ModelViewerProps {
  src: string;
  alt?: string;
  autoRotate?: boolean;
  cameraControls?: boolean;
  ar?: boolean;
  className: string;
}

export interface SwitchContextType {
  isActive: boolean;
  toggle: () => void;
}

export interface TintLevelProps {
  name: string;
  description: string;
  tone: string;
  opacity: number;
}

export interface ImagesProps {
  source: string;
  width: number;
  height: number;
  name?: string;
  role?: string;
}

export interface AchievementProps {
  end: number;
  label: string;
  delay: number;
}
export interface QuoteFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export type ContactInfoItems = {
  text: string;
  type: string;
};

export interface InputFieldConfig {
  id: keyof QuoteFormValues;
  label: string;
  multiline?: boolean;
  type?: string;
}

export interface TintContextType {
  opacity: number;
  setOpacity: (value: number) => void;
  tintName: string;
  setTintName: (value: string) => void;
}

export interface Material {
  name: string;
  pbrMetallicRoughness: {
    setBaseColorFactor: (color: [number, number, number, number]) => void;
  };
}

export interface Model {
  materials: Material[];
}

export interface ModelViewerElement extends HTMLElement {
  model?: Model;
}

export interface CustomButtonProps {
  id?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick?: () => void;
  width: string;
  icon?: ReactNode;
}

export interface FooterType {
  title: string;
  items?: string[];
}
