<template>
  <div class="homepage-app">
    <router-link to="/guidepage">
        <img src="./img/icon-01-2x.png">
    </router-link>
    <p class="tit">麋途音乐</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  methods: {

  },
  components: {

  }
}
</script>

<style scoped>
    .homepage-app{
        text-align: center;
        margin-top: 1rem;
        z-index: 0;
    }
    .tit{
      margin-top: .15rem;
      text-align: center;
      font-size:0.25rem;
    }
</style>
