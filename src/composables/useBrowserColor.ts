// useBrowserColor.ts
export function useBrowserColor({
  themeColor = '#111827',
  appleStatusBarStyle = 'black-translucent',
} = {}) {
  let themeColorMeta = document.querySelector(
    'meta[name="theme-color"]'
  ) as HTMLMetaElement;
  if (!themeColorMeta) {
    themeColorMeta = document.createElement('meta') as HTMLMetaElement;
    themeColorMeta.name = 'theme-color';
    document.head.appendChild(themeColorMeta);
  }
  themeColorMeta.content = themeColor;

  // 创建并设置 apple-mobile-web-app-status-bar-style meta 标签
  let statusBarStyleMeta = document.querySelector(
    'meta[name="apple-mobile-web-app-status-bar-style"]'
  ) as HTMLMetaElement;
  if (!statusBarStyleMeta) {
    statusBarStyleMeta = document.createElement('meta') as HTMLMetaElement;
    statusBarStyleMeta.name = 'apple-mobile-web-app-status-bar-style';
    document.head.appendChild(statusBarStyleMeta);
  }
  statusBarStyleMeta.content = appleStatusBarStyle;
  // console.log('useBrowserColor', themeColorMeta, statusBarStyleMeta);
}
