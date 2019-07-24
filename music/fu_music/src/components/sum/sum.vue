<template>
  <div class="sum">
      <nav_ @getdata="get"></nav_>
      <sidebar :msg="msg" @add="adds"></sidebar>
  </div>
</template>

<script>
import nav_ from '../nav/nav.vue'
import sidebar from '../sidebar/Sidebar.vue'
export default {
  data() {
    return {
        msg:null
    }
  },
  methods: {
      get(res){
          this.msg=res;
      },
      adds(res){
          this.msg=res;
      }
  },
  components: {
      nav_,
      sidebar
  }
}
</script>

<style scoped lang='less'>
  
</style>
