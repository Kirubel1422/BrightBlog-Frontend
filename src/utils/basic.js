export const truncateDesc = (text, limit = 100) => {
  return text.length > limit
    ? text.split("").splice(0, limit).join("") + "..."
    : text;
};
