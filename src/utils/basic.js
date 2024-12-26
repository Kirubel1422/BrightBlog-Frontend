export const truncateDesc = (text, limit = 100) => {
  return text.length > limit
    ? text.split("").splice(0, limit).join("") + "..."
    : text;
};

export const routing = (currentPath) => {
  const path = currentPath ? currentPath.split("/")[1] : [];

  if (!path.length) return "home";

  return path;
};
