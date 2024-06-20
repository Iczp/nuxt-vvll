export const getTagCode = (path: string): string | undefined => {
  const trimmedPath = path.endsWith('/') ? path.slice(0, -1) : path; // 去掉末尾的斜杠（如果有的话）
  const parts = trimmedPath.split('/');
  const lastPart = parts[parts.length - 1];
  return lastPart;
};
