import fs from 'fs';
import path from 'path';
import type { FileInfo } from '~/types/FileInfo';



export function removeSortPrefix(name: string): string {
  const nameParts = name.split('.');
  if (nameParts.length > 0 && !isNaN(Number(nameParts[0]))) {
    return nameParts.slice(1).join('.');
  }
  return name;
}

export function generateRoutePath(
  filePath: string,
  isDirectory: boolean,
  rootPath: string
): string {
  const parsedPath = path.parse(filePath);
  let relativePath = path.relative(rootPath, parsedPath.dir);

  // Normalize and split the path
  const parts = relativePath
    .split(path.sep)
    .map((part) => removeSortPrefix(part));

  // Filter out empty parts and join back with '/'
  relativePath = parts
    // .filter(part => !!part)
    .join('/');

  // If relativePath is empty, return '/'
  if (relativePath === '') {
    return '/';
  }

  const fileName = removeSortPrefix(parsedPath.name);

  return `/${relativePath}/${fileName}`.replace(/\\/g, '/');
}

// 递归函数，用于遍历文件夹
export function traverseDirectory(
  directory: string,
  generateRouteAction: (fullPath: string, isDirectory: boolean) => string,
  dict: { [key: string]: FileInfo } = {}
): { [key: string]: FileInfo } {
  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    const fullPath = path.join(directory, file);
    const stat = fs.statSync(fullPath);
    const isDirectory = stat.isDirectory();
    const routePath = generateRouteAction(fullPath, isDirectory);
    const fileInfo: FileInfo = {
      fullPath: fullPath,
      path: routePath,
      name: file,
      lastModified: stat.mtime,
      created: stat.birthtime,
      isDirectory,
      size: stat.size,
    };
    if (dict[routePath]) {
      dict['*' + routePath] = fileInfo;
    } else {
      dict[routePath] = fileInfo;
    }

    if (stat.isDirectory()) {
      traverseDirectory(fullPath, generateRouteAction, dict);
    }
  });

  return dict;
}

export const resolveContentFiles = (dirPath: string) => {
  return traverseDirectory(dirPath, (x, isDirectory) =>
    generateRoutePath(x, isDirectory, dirPath)
  );
};

// // 使用示例
// const directoryPath = './src/content'; // 替换为实际的目录路径
// const contentFiles = resolveContentFiles(directoryPath);
// console.log(contentFiles);
