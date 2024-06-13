export const formatTags = (data: any): string[] => {
  if (!data) {
    return [];
  }
  if (Array.isArray(data)) {
    return data;
  }
  if (typeof data === 'string') {
    return data.split(/ |,/g).filter((item) => item.trim());
  }
  return [data];
};
