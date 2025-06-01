import {
  InputFieldConfig,
  TintLevelProps,
  AchievementProps,
} from "./types/globalTypes";

export const NavbarFIelds: string[] = [
  "navbar.title.home",
  "navbar.title.benefits",
  "navbar.title.about",
  "navbar.title.Contact",
];

export const TintLevel: TintLevelProps[] = [
  {
    name: "block.model3d.square.accordion.option.1.name",
    description: "block.model3d.square.accordion.option.1.description",
    tone: "#FFFFFF",
    opacity: 0.10
  },
  {
    name: "block.model3d.square.accordion.option.2.name",
    description: "block.model3d.square.accordion.option.2.description",
    tone: "#D9D9D9",
    opacity: 0.25
  },
  {
    name: "block.model3d.square.accordion.option.3.name",
    description: "block.model3d.square.accordion.option.3.description",
    tone: "#A6A6A6",
    opacity: 0.45
  },
  {
    name: "block.model3d.square.accordion.option.4.name",
    description: "block.model3d.square.accordion.option.4.description",
    tone: "#707070",
    opacity: 0.65
  },
  {
    name: "block.model3d.square.accordion.option.5.name",
    description: "block.model3d.square.accordion.option.5.description",
    tone: "#404040",
    opacity: 0.80
  },
  {
    name: "block.model3d.square.accordion.option.6.name",
    description: "block.model3d.square.accordion.option.6.description",
    tone: "#1A1A1A",
    opacity: 1
  },
];

// About us
export const achievementStats: AchievementProps[] = [
  {
    end: 500,
    label: "companyAchievements.description.1",
    delay: 800,
  },
  {
    end: 200,
    label: "companyAchievements.description.2",
    delay: 800,
  },
  {
    end: 8,
    label: "companyAchievements.description.3",
    delay: 400,
  },
];

// Contact us
export const inputFields: InputFieldConfig[] = [
  { id: "firstName", label: "quoteForm.fields.name" },
  { id: "lastName", label: "quoteForm.fields.lastName" },
  { id: "email", label: "quoteForm.fields.email", type: "email" },
  { id: "phone", label: "quoteForm.fields.phone", type: "tel" },
  { id: "service", label: "quoteForm.fields.serviceType" },
  { id: "message", label: "quoteForm.fields.message", multiline: true },
];

export const serviceOptions = [
  { value: "Automotive Tinting", labelId: "quoteForm.service.automotive" },
  { value: "Residential Tinting", labelId: "quoteForm.service.residential" },
  { value: "Commercial Tinting", labelId: "quoteForm.service.commercial" },
];
