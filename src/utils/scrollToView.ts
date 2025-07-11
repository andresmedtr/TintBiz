export const scrollToView = (target: string) => {
  const isEmail = target.includes("@") && target.includes(".");
  const isPhone = target.includes("+1");
  const isAnchor = target.startsWith("#");

  if (isEmail) {
    window.location.href = `mailto:${target}`;
  } else if (isAnchor) {
    const element = document.getElementById(target.slice(1));
    element?.scrollIntoView({ behavior: "smooth" });
  } else if (isPhone) window.location.href = `tel:${target}`;
  else {
    window.open(target, "_blank");
  }
};
