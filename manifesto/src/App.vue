<template>
  <div id="app">
    <router-view v-bind:root-data="root_msg"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      root_msg: 'This is Data from Root Element'
    }
  }
}
</script>

<style>

</style>
