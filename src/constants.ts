import { InputFieldsProps, TintLevelProps } from "./types/globalTypes";

export const inputFields: InputFieldsProps[] = [
  { id: "name", label: "Name" },
  { id: "email", label: "Email" },
  { id: "phone", label: "Phone Number" },
];

export const NavbarFIelds: string[] = [
  "navbar.title.home",
  "navbar.title.benefits",
  "navbar.title.about",
  "navbar.title.Contact"
]

export const TintLevel: TintLevelProps[] = [
  {
    name: 'block.model3d.square.accordion.option.1.name',
    description: 'block.model3d.square.accordion.option.1.description',
    tone: '#FFFFFF',
  },
  {
    name: 'block.model3d.square.accordion.option.2.name',
    description: 'block.model3d.square.accordion.option.2.description',
    tone: '#D9D9D9',
  },
  {
    name: 'block.model3d.square.accordion.option.3.name',
    description: 'block.model3d.square.accordion.option.3.description',
    tone: '#A6A6A6',
  },
  {
    name: 'block.model3d.square.accordion.option.4.name',
    description: 'block.model3d.square.accordion.option.4.description',
    tone: '#707070',
  },
  {
    name: 'block.model3d.square.accordion.option.5.name',
    description: 'block.model3d.square.accordion.option.5.description',
    tone: '#404040',
  },
  {
    name: 'block.model3d.square.accordion.option.6.name',
    description: 'block.model3d.square.accordion.option.6.description',
    tone: '#1A1A1A',
  }
]