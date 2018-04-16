<template>
  <div class="hello">
   <h1>{{msg}}</h1>
    <li>
      <router-link to="/1">Version 1</router-link>
    </li>
    <li>
      <router-link to="/2">Version 2</router-link>
    </li>
    <li>
      <router-link to="/3">Version 3</router-link>
    </li>
  </div>
</template>

<script>
  export default {
    name: 'MainNav',
    data () {
      return {
        msg: 'This is the Main Navigation'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
