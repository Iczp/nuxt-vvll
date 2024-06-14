import {
  addComponent,
  defineNuxtModule,
  installModule,
  addComponentsDir,
  addImportsDir,
  createResolver,
  addPlugin,
} from '@nuxt/kit';
import NuxtUi from '@nuxt/ui';

export default defineNuxtModule({
  setup(options, nuxt) {
    // import { MyComponent as MyAutoImportedComponent } from 'my-npm-package'

    // console.log('NuxtUi', NuxtUi);
    // console.log('setup nuxt', nuxt);
    // console.log('setup options', options);

    // addComponent({
    //   name: 'Card',
    //   export: 'MyComponent',
    //   filePath: '@nuxt/ui',
    // });
  },
});
