export const isDir = (item: any) => Array.isArray(item?.children) && item?.children.length > 0;
