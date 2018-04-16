<template>
  <div class="wrapper">
    <!--<p>{{title}}</p>-->
    <div class="line" v-for="line in text">
      <div class="main">
        {{line.main}}
      </div>
      <div class="sub">
        {{line.sub}}
      </div>
    </div>
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
    padding-top: 2em;
    font-family: "Akzidenz-Grotesk Std";
  }

  .line{
    margin: 1em;
    margin-bottom: 4em
  }

  .main{
    font-size:2em;
  }
  .sub{
    text-align: right;
    font-weight: normal;
  }
</style>
