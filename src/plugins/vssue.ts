// import Vue from 'vue';
// import Vssue from 'vssue';
// import GithubV3 from '@vssue/api-github-v3';
// import 'vssue/dist/vssue.css';

// import 'gitalk/dist/gitalk.css';
// import Gitalk from 'gitalk';

export default defineNuxtPlugin((nuxtApp) => {
  const appConfig = useAppConfig();

  // appConfig.site.title = 'Vssue';
  // 使用nuxtApp做一些操作
  //   nuxtApp.vueApp.use(Gitalk, {
  //     api: GithubV3,
  //     owner: 'OWNER_OF_REPO',
  //     repo: 'NAME_OF_REPO',
  //     clientId: 'YOUR_CLIENT_ID',
  //     clientSecret: 'YOUR_CLIENT_SECRET',
  //   });
});
