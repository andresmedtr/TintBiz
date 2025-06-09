export const scrollToView = (target: string) => {
    if (target.startsWith("#")) {
      const element = document.getElementById(target.slice(1));
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.open(target, "_blank");
    }
  };