<template>
  <div class="wrapper">
    <p class="title">{{title}}</p>
    <div class="grid">
        <div class="cell" v-for="line in text">
          <div class="text">
            <div class="main">{{line.main}}</div>
            <div class="sub">{{line.sub}}</div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Version2',
    props: ['title', 'author', 'text'],
    data () {
      return {
        msg: 'This is Version 2'
      }
    }
  }
</script>

<style scoped>
  .title{
    font-size: 3em;
    height: 50vh;
  }

  .main{
    font-size: 4em;
    letter-spacing: -1px;
    font-kerning: normal;
    /*line-height: 95%;*/
  }

  .sub{
    font-size: larger;
  }

  .text{
    position: absolute;
    bottom: 2em;
  }

  .wrapper{
    font-family: "Typewriter MT Std", serif;
    font-weight: bolder;
  }

  .cell{
    width: 90vw;
    margin: 2em;
    position: relative;
  }

  .grid{
    display: grid;
    grid-template:  90vh / repeat(18,130vw);
  }

</style>
