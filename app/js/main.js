import { calculator } from './modules/calculator.js';
import { formSubmit } from './modules/formSubmit.js';
import { initCategoriesSLider } from './modules/initCategoriesSlider.js';
import { initTabs } from './modules/initTabs.js';
import { initLazyLoad } from './modules/lazyLoad.js';
import { scrollTo } from './modules/scrollTo.js';

window.addEventListener('load', function () {
  initTabs();
  initLazyLoad();
  formSubmit();
  initCategoriesSLider();
  calculator();
  scrollTo();
});
