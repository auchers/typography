<template>
  <div class="wrapper">
    <p>{{title}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Version2',
    props: ['title', 'text'],
    data () {
      return {
        msg: 'This is Version 2'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrapper{
    font-family: "Typewriter Elite MT Std", serif;
    font-weight: bolder;
  }

</style>
