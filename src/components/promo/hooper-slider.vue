<template>
  <div>
    <slide>
      <div class="promo__slider-item">
        <div class="promo__slider-img">
          <img src="{{ slide.img }}" alt="{{ slide.header }}">
        </div>
        <div class="promo__slider-caption">
          <h2 class="promo__slider-header">{{ slide.header }}</h2>
          {% if slide.description %}
          <div class="promo__slider-text">{{ slide.description }}</div>
          {% endif %}
          {% if slide.button %}
          {% include '../buttons/button.twig' with {
          text: slide.button.name,
          modify: 'btn--promo',
          tag: 'button',
          active: true,
          vueClick: "openPopup('modalForm')"
          }%}
          {% endif %}
        </div>
      </div>
    </slide>
    <hooper-progress slot="hooper-addons"></hooper-progress>
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>
  </div>
</template>

<script>
    import {
        Hooper,
        Slide,
        Pagination as HooperPagination,
        Progress as HooperProgress,
        Navigation as HooperNavigation
    } from 'hooper';

    export default {
        name: 'hooper',
        components: {
            Hooper,
            Slide,
            HooperPagination,
            HooperProgress,
            HooperNavigation
        }
    }
</script>
