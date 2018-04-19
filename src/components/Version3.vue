<template>
  <div class="wrapper">
    <template class="line" v-for="line in text">
      <div class="main">
        {{line.main}}
      </div>
      <div class="sub">
        {{line.sub}}
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'Version3',
    props: ['title', 'text', 'author'],
    data () {
      return {
        msg: 'This is Version 3'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-top: 2em;
    font-family: "Scala";
  }

  .line{
    margin: 1em;
    margin-bottom: 4em;
  }

  .main, .sub{
    margin: 1em;
    /*margin-bottom: 4em;*/
  }

  .sub{
    text-align: right;
    font-weight: normal;
  }
</style>
