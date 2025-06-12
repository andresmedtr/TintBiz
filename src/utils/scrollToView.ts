export const scrollToView = (target: string) => {
  const isEmail = target.includes("@") && target.includes(".");
  const isAnchor = target.startsWith("#");

  if (isEmail) {
    window.location.href = `mailto:${target}`;
  } else if (isAnchor) {
    const element = document.getElementById(target.slice(1));
    element?.scrollIntoView({ behavior: "smooth" });
  }
};
