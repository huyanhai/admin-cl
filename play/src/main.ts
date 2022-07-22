import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import Button from '../../packages/components/button/index';
import '../../packages/theme/src/index.scss';

createApp(App).use(Button).mount('#app');
