import type { App } from 'vue';
import Components from './components';
import { version } from '@admin-cl/constants';

const install = (app: App): void => {
  Components.forEach((component) => {
    app.component(component.name, component);
  });
};

export { install, version };
