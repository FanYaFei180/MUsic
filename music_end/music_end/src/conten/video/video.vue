<template>
  <div class="video">
    <Navigation :msg="list"></Navigation>
  </div>
</template>

<script>
import Navigation from "../../components/Navigation.vue";
export default {
  data() {
    return {
      list: [
        { img1: require("./img-video/img-discover/icon-menu.png") },
        { img2: require("./img-video/img-discover/icon-search.png") },
        { img2: require("./img-video/img-discover/icon-add.png") },
        { to1: "/home" },
        { to2: "/home" },
        { to3: "/home" },
        { show: true },
        {num:''},
        {sum:true},
        { inputs: '' }



      ]
    };
  },
  methods: {},
  components: {
    Navigation
  }
};
</script>

<style scoped lang="less">
</style>
