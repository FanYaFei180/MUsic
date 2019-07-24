<template>
  <div class>
    <img src="./img/启动页.png" alt>
  </div>
</template>

<script>
import intros from "./intros";

export default {
  data() {
    return {};
  },
  methods: {},
  
  components: {},
  mounted() {
     setTimeout(()=>{
      this.$router.push("/intros");
    }, 3000);
   
  }
};
</script>

<style scoped>
div {
  width: 100%;
  height: 100%;
}
img{
  width: 100%;
}
</style>
