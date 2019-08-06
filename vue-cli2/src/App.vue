<template>
    <transition name="fade">
       <div id="app">
         <router-view/>
       </div>
    </transition>
</template>
<script>
export default {
    name:'App'
}
</script>

<style lang="less" >
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
