export interface FileInfo {
  fullPath: string;
  path: string;
  name: string;
  lastModified: Date;
  created: Date;
  isDirectory: boolean;
  size: number;
}
