import { formSubmit } from './modules/formSubmit.js';
import { initTabs } from './modules/initTabs.js';
import { initLazyLoad } from './modules/lazyLoad.js';

window.addEventListener('load', function () {
  initTabs();
  initLazyLoad();
  formSubmit();
});
