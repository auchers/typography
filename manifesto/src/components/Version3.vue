<template>
  <div class="hello">
    {{msg}}
    <p>{{title}}</p>
  </div>
</template>

<script>
  export default {
    name: 'Version3',
    props: ['title'],
    data () {
      return {
        msg: 'This is Version 3'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
