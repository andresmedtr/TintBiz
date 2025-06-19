import {
  InputFieldConfig,
  TintLevelProps,
  AchievementProps,
  ContactInfoItems,
  ImagesProps,
  FooterType,
  SocialMediaType,
  LegalTermsProps,
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
    opacity: 0.1,
  },
  {
    name: "block.model3d.square.accordion.option.2.name",
    description: "block.model3d.square.accordion.option.2.description",
    tone: "#D9D9D9",
    opacity: 0.25,
  },
  {
    name: "block.model3d.square.accordion.option.3.name",
    description: "block.model3d.square.accordion.option.3.description",
    tone: "#A6A6A6",
    opacity: 0.45,
  },
  {
    name: "block.model3d.square.accordion.option.4.name",
    description: "block.model3d.square.accordion.option.4.description",
    tone: "#707070",
    opacity: 0.65,
  },
  {
    name: "block.model3d.square.accordion.option.5.name",
    description: "block.model3d.square.accordion.option.5.description",
    tone: "#404040",
    opacity: 0.8,
  },
  {
    name: "block.model3d.square.accordion.option.6.name",
    description: "block.model3d.square.accordion.option.6.description",
    tone: "#1A1A1A",
    opacity: 1,
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

export const foundersPictures: ImagesProps[] = [
  {
    source: "/founders/andy.webp",
    width: 200,
    height: 250,
    name: "Andy Romero",
    role: "block.aboutUs.founders.role.andy",
  },
  {
    source: "/founders/giovanny.webp",
    width: 200,
    height: 250,
    name: "Giovanny Rubio",
    role: "block.aboutUs.founders.role.gio",
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

export const contactInfo: ContactInfoItems[] = [
  {
    text: "(305) 240-9065",
    type: "whatsapp",
  },
  {
    text: "(954) 676-4480",
    type: "phone",
  },
  {
    text: "tintsathome.miami@gmail.com",
    type: "email",
  },
  {
    text: "tintsathomefl",
    type: "instagram",
  },
];

export const businessHours: string[] = [
  "block.contactUs.contactInfo.subtitle.schedule.1",
  "block.contactUs.contactInfo.subtitle.schedule.2",
];

export const footerInfo: FooterType[] = [
  {
    title: "footer.title.1",
    items: [
      { text: "footer.title.1.description.1" },
      { text: "footer.title.1.description.2" },
      { text: "footer.title.1.description.3" },
      { text: "footer.title.1.description.4" },
    ],
  },
  {
    title: "footer.title.2",
    items: [
      { text: "footer.title.2.description.1", target: "/terms-conditions" },
      { text: "footer.title.2.description.2", target: "/refund-policy" },
      { text: "footer.title.2.description.3", target: "/terms-conditions" },
    ],
  },
  {
    title: "footer.title.3",
    items: [
      {
        text: "footer.title.3.description.1",
        target: "https://wa.me/3052409065",
      },
      {
        text: "footer.title.3.description.2",
        target: "https://www.instagram.com/tintsathomefl/",
      },
      {
        text: "footer.title.3.description.3",
        target: "https://www.instagram.com/tintsathomefl/",
      },
    ],
  },
];

export const socialMedia: SocialMediaType[] = [
  "whatsapp",
  "phone",
  "instagram",
  "email",
];

export const legalTerms: LegalTermsProps[] = [
  { title: "legal.1.title", description: "legal.1.description" },
  { title: "legal.2.title", description: "legal.2.description" },
  { title: "legal.3.title", description: "legal.3.description" },
  { title: "legal.4.title", description: "legal.4.description" },
  { title: "legal.5.title", description: "legal.5.description" },
  { title: "legal.6.title", description: "legal.6.description" },
  { title: "legal.7.title", description: "legal.7.description" },
  { title: "legal.8.title", description: "legal.8.description" },
  { title: "legal.9.title", description: "legal.9.description" },
  { title: "legal.10.title", description: "legal.10.description" },
  { title: "legal.11.title", description: "legal.11.description" },
  { title: "legal.12.title", description: "legal.12.description" },
];

export const refundTerms: LegalTermsProps[] = [
  { title: "refund.1.title", description: "refund.1.description" },
  { title: "refund.2.title", description: "refund.2.description" },
  { title: "refund.3.title", description: "refund.3.description" },
  { title: "refund.4.title", description: "refund.4.description" },
  { title: "refund.5.title", description: "refund.5.description" },
];

export const carBenefits: string[] = [
  "block.benefits.card.car.1",
  "block.benefits.card.car.2",
  "block.benefits.card.car.3",
  "block.benefits.card.car.4",
];

export const houseBenefits: string[] = [
  "block.benefits.card.house.1",
  "block.benefits.card.house.2",
  "block.benefits.card.house.3",
  "block.benefits.card.house.4",
];