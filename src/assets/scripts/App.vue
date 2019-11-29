<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>
<template>
  <div id="hooper">
    <hooper :progress="true"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import hooper from './components/hooper.vue';

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}

// export hooper {
//   name: 'hooper',
//   components: {
//     hooper
//   }
// }

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
