<template>
  <div class="wrapper"
       v-bind:style="styleObj">
    <!--<p class="title">{{title}}</p>-->
    <div class="main"
          v-on:mouseover="isMain = !isMain"
          v-bind:style="styleObj">
      {{(isMain) ? text[numClicks].main : text[numClicks].sub}}
    </div>
    <button
      v-on:click="handleClick"
      v-bind:style="styleObj">Next</button>
  </div>
</template>

<script>
  export default {
    name: 'Version2',
    props: ['title', 'author', 'text'],
    data () {
      return {
        msg: 'This is Version 2',
        colors: ["#0d105c",
          "#962b63",
          "#174976",
          "#9f160d",
          "#98b8c9",
          "#e18d21",
          "#25575f",
          "#a6545c",
          "#7da19b",
          "#856781",
          "#6b6a71",
          "#a64913" ],
          numClicks: 0,
          isMain: true
      }
    },
    computed: {
      styleObj (){
        let background = (this.isMain)? this.colors[this.numClicks]: "unset",
          font= (this.isMain)? 'white': this.colors[this.numClicks],
          obj = {backgroundColor: background, color: font}
        return obj
      }
    },
    methods:{
      handleClick (){
        this.numClicks +=1;
        this.isMain = true;
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
    font-size: 6em;
    letter-spacing: -1px;
    font-kerning: normal;
    position: absolute;
    top: 60vh;
    padding: 1rem;
    line-height: .9em;
    /*line-height: 95%;*/
  }

  .wrapper{
    font-family: "ITC Franklin Gothic Std", serif;
    font-weight: bold;
    min-height: 100vh;
    width: 100vw;
    position: relative;
  }

  button{
    position: absolute;
    top: 1rem;
    right: 1rem;
    outline: none;
    font-size: larger;
    font-family: "ITC Franklin Gothic Std";
  }

</style>
