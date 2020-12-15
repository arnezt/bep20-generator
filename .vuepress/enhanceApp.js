import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import vueSmoothScroll from 'vue2-smooth-scroll';
import { VueSpinners } from '@saeris/vue-spinners';

import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full';

export default ({ Vue }) => {
  Vue.use(BootstrapVue);
  Vue.use(BootstrapVueIcons);
  Vue.use(vueSmoothScroll);
  Vue.use(VueSpinners);

  Vue.component('ValidationProvider', ValidationProvider);
  Vue.component('ValidationObserver', ValidationObserver);
};
