import type { FileInfo } from '~/types/FileInfo';

export const useContentFiles = (): { [key: string]: FileInfo | undefined } => {
  const runtimeConfig = useRuntimeConfig();
  const contentFiles = runtimeConfig.public.contentFiles;
  return contentFiles;
};
