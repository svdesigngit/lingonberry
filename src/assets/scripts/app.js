// Import components
import $ from 'jquery';
import slickSlider from 'slick-carousel';
import Accordion from '../../components/accordion';

// Vue
// import Vue from 'vue/dist/vue'

// Form validate
// import Vuelidate from 'vuelidate'
// Vue.use(Vuelidate)
// import { required, maxLength, minLength, email, between } from 'vuelidate/lib/validators'

// Slider
// import { Hooper, Slide } from 'hooper'
// import HooperSlider from '@components/promo/hooper-slider.vue'

// Modal window
// import ModalWindow from '@components/modal-window/ModalWindow.vue'

// Yandex maps
// import YandexMap from '@components/yandex-map/YandexMap.vue'

// new Vue({
//   name: 'app',
//   components: {
//     // HooperSlider,
//     ModalWindow
//     // YandexMap
//   },
//   data: {
//     msg: 'Как подключить сторонний  компонент и как передать в него динамичесие данные из бэка',
//     className1: 'primary',
//     age: '',
//     name: '',
//     email: '',
//     phone: ''
//   },
//   validations: {
//     form: {
//       name: {
//         required,
//         minLength: minLength(4)
//       },
//       age: {
//         required,
//         between: between(20, 30)
//       },
//       email: {
//         required,
//         email,
//       },
//       phone: {
//         required
//       }
//     }
//   },
//   methods: {
//     openPopup(key) {
//       this.$refs[key].open();
//       console.log(key);
//
//     }
//   }
// }).$mount('#app');

// Slick slider
(function(slickSliderContainer) {
  if (!slickSliderContainer.length) {
    return;
  }

  slickSliderContainer.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    speed: 300,
    lazyLoad: 'ondemand',
    autoplay: true,
    autoplaySpeed: 3000
  });
})($('.j-slider'));

// Slick slider
(function(slickSliderContainer) {
  if (!slickSliderContainer.length) {
    return;
  }

  slickSliderContainer.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    appendArrows: $('.gallery-slider__arrows'),
    speed: 300,
    lazyLoad: 'ondemand',
    autoplay: false,
    autoplaySpeed: 3000,
    mobileFirst: true,
    centerMode: true,
    centerPadding: '10%',
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          centerPadding: '20%',
          initialSlide: 1,
          arrows: true
        }
      }
    ]
  });
})($('.j-slider-center'));

// Burger
(function(burger) {
  if (!burger) {
    return;
  }

  burger.each(function() {
    $(this).click(function() {
      const nav = $(this).data('nav');
      const navList = $(this).data('list');

      $(`.${nav}`).toggleClass('is-active');
      $(`.${navList}`).toggleClass('is-active');
      $(this).toggleClass('is-active');
      $('html').toggleClass('is-overflow');
    });
  });
})($('.j-burger'));

/**
 * Аккордион
 */
const accordion = new Accordion();
accordion.init({
  selector: '.j-accordion',
  activeClass: 'accordion__item-active',
  closeOthers: true
});

// (function(accordion) {
//   if (!accordion) {
//     return;
//   }
//
//   accordion.each(function() {
//     $(this).click(function(event) {
//       console.log($(event.target));
//       console.log(this);
//     });
//   });
// })($('.j-accordion'));
