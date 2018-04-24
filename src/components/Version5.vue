<template>
  <div class="wrapper"
       v-bind:style="styleObj">
    <div class="main"
          v-on:mouseover="isMain = !isMain"
          v-bind:style="styleObj">
      {{(isMain) ? text[numClicks].main : text[numClicks].sub}}
    </div>
    <button v-if="numClicks < 16"
            v-on:click="handleClick"
            v-bind:style="styleObj" class="next">Next</button>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'Version2',
    props: ['title', 'author', 'text'],
    data () {
      return {
        msg: 'This is Version 2',
        colors: [
          "#962b63",
          "#0d105c",
          "#174976",
          "#9f160d",
          "#98b8c9",
          "#e18d21",
          "#25575f",
          "#a6545c",
          "#7da19b",
          "#856781",
          "#6b6a71",
          "#a64913",
          "#962b63",
          "#0d105c",
          "#174976",
          "#e18d21",
          "#98b8c9",],
          numClicks: 0,
          isMain: true
      }
    },
    computed: {
      styleObj (){
        let background = (this.isMain)? this.colors[this.numClicks]: "unset",
          font= (this.isMain)? 'white': this.colors[this.numClicks],
          obj = {backgroundColor: background, color: font, borderColor: font}
        return obj
      }
    },
    methods:{
      handleClick (){
        this.numClicks +=1;
        this.isMain = true;
      }
    },
    mounted(){
      console.log(this.text.length, this.colors.length)
    }
  }
</script>

<style scoped>
  .title{
    font-size: 3em;
    height: 50vh;
  }

  .main{
    font-size: 14vw;
    letter-spacing: -1px;
    font-kerning: normal;
    position: absolute;
    top: 0;
    padding: 4rem;
    line-height: 14vw;
    /*line-height: 95%;*/
  }

  .wrapper{
    font-family: "Optima LT Std", "Optima", serif;
    font-weight: bold;
    min-height: 100vh;
    width: 100vw;
    position: relative;
  }

  button{
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    outline: none;
    padding: .3rem;
    font-size: larger;
    border-width: 3px;
    border-color: white;
    -webkit-appearance: none;
    font-family: "Optima LT Std", "Optima", serif;
  }

  button.back{
    left: 1rem;
    top: unset;
    bottom: 1rem;
  }

</style>
