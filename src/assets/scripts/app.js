import Vue from 'vue/dist/vue';
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);
import { required, maxLength, minLength, email, between } from 'vuelidate/lib/validators';
import {
  Hooper,
  Slide
} from 'hooper';

import ModalWindow from '@components/modal-window/ModalWindow.vue';
import YandexMap from '@components/yandex-map/YandexMap.vue';

new Vue({
  components: {
    Hooper,
    Slide,
    ModalWindow,
    YandexMap
  },
  data: {
    msg: 'Как подключить сторонний  компонент и как передать в него динамичесие данные из бэка',
    className1: 'primary',
    age: '',
    name: '',
    email: '',
    phone: ''
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(4)
      },
      age: {
        required,
        between: between(20, 30)
      },
      email: {
        required,
        email,
      },
      phone: {
        required
      }
    }
  },
  methods: {
    openPopup(key) {
      this.$refs[key].open();
      console.log(key);
      
    }
  }
}).$mount('#app');
