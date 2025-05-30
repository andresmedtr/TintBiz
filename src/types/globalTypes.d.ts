export interface EmailData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export interface InputFieldsProps { 
    id: string;
    label: string
}

export interface ModelViewerProps {
  src: string;
  alt?: string;
  autoRotate?: boolean;
  cameraControls?: boolean;
  ar?: boolean;
  className?: string;
  width: string;
  height: string

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
