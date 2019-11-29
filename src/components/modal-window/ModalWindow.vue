<template>
  <div :class="{ active: isActive }" class='modal'>
    <button class='modal__close' @click="close"></button>
    <div class='modal__content'>
      <h2 class='modal__title'>
        <slot name="title"></slot>
      </h2>
      <slot name="description"></slot>
      <slot name="body"></slot>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isActive: false,
        body: null
      }
    },
    mounted() {
      this.body = document.querySelector('body');
    },
    methods: {
      close() {
        this.isActive = false;
        this.body.classList.remove('hidden');
      },
      open() {
        this.isActive = true;
        this.body.classList.add('hidden');
      }
    },
  }
</script>

<style scoped>

</style>




