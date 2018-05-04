<template>
  <div class="wrapper">
    <!--<p class="title">{{title}}</p>-->
    <div class="col1">
      <div class="col1-text-wrapper">
        <div class="cell" v-for="(line, i) in text">
          <div class="text">
            <div class="main" v-bind:class="{clicked: hasBeenClicked[i]}" v-on:click="handleClick">{{line.main}} {{line.sub}}</div>
            <!--<div class="sub">{{line.sub}}</div>-->
          </div>
        </div>
        <button v-if="callout.active" class="export" v-on:click="exportToPDF">Export to PDF</button>
      </div>
    </div>
    <div id="manifesto" class="callout" v-if="callout.active">
      <div class="callout-text" v-bind:style="{fontFamily:'Futura Std'}" v-for="line in callout.main">{{line}}</div>
    </div>
  </div>
</template>

<script>
  // import 'jspdf'

  export default {
    name: 'Version4',
    props: ['title', 'author', 'text'],
    data () {
      return {
        msg: 'This is Version 4',
        callout: {main: [],
          active: false},
        mutableText: [],
        hasBeenClicked: []
      }
    },
    created(){
      this.mutableText = this.text.map((x,i) =>{
        return {main: x.main, sub: x.sub, orig_i: i}
      })
      this.hasBeenClicked = this.text.map(x => {return false});
      console.log(this.hasBeenClicked)
    },
    methods: {
      handleClick () {
        if (this.mutableText.length > 0){
          let rand = Math.round(Math.random() * this.mutableText.length-1);
          let cur = this.mutableText.splice(rand, 1);
          this.hasBeenClicked[cur[0].orig_i] = true;

          this.callout.main.splice(0, 0, cur[0].main + ' ' + cur[0].sub)
          this.callout.active = true;
        }
      },
      exportToPDF (){
        const html2pdf = require('html2pdf.js')

        let html = document.getElementById('manifesto');

        html2pdf(html, {
          margin: 5,
          filename: 'manifesto.pdf',
          html2canvas:  { dpi: 192, letterRendering: true },
        })
      }
    }
  }
</script>

<style scoped>
  .col1{
    margin: 1em;

  }

  .col1-text-wrapper{
    position: sticky;
    top: 4em;
  }

  .text{
    font-size: 8px;
  }

  .text:hover {
    font-weight: bolder;
  }

  .cell{
    margin-bottom: .3em;
  }

  .wrapper{
    display: grid;
    grid-template-columns: 225px auto;
    margin: 3em;
    font-family: "Futura Std";
  }

  .callout-text{
    margin-bottom: 1em;
  }

  .clicked{
    text-decoration: goldenrod line-through;
  }

  button {
    margin-top: 2em;
    /*margin-left: .3em;*/
    height: 2em;
    width: fit-content;
    background: none;
    font-family: "Futura Std";
    /*position: absolute;*/
    /*bottom: 1em;*/
    /*border: none;*/
    border-bottom-color: goldenrod;
    border-width: 0 0 2px 0;
    -webkit-appearance: none;
    color: unset;
    border-image: none;
    padding-left: 0;
  }

  button:focus {
    outline:0;
    font-weight: bolder;
  }

  .callout{
    flex: 1 1 auto;
    font-size: 8vw;
  }

</style>
