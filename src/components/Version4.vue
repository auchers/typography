<template>
  <div class="wrapper">
    <!--<p class="title">{{title}}</p>-->
    <div class="grid">
      <div class="cell" v-for="line in text">
        <div class="text">
          <div class="main" v-on:click="handleClick">{{line.main}}</div>
          <!--<div class="sub">{{line.sub}}</div>-->
        </div>
      </div>
    </div>
    <div class="callout" v-if="callout.active">{{callout.main}} {{callout.sub}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Version4',
    props: ['title', 'author', 'text'],
    data () {
      return {
        msg: 'This is Version 4',
        callout: {main: '',
          sub: '',
          active: false}
      }
    },
    methods: {
      handleClick () {
        // let self = this;
        let rand = Math.round(Math.random() * this.text.length);
        let cur = this.text[rand];

        let callout = {
          main: cur.main,
          sub: cur.sub,
          active: true,
        }

        this.callout = callout;
      }
    }
  }
</script>

<style scoped>
  .grid{
    width: 20vw;
    margin: 1em;
    flex: 0 0 auto;
  }

  .text{
    font-size: 5pt;
  }

  .text:hover {
    font-weight: bolder;
  }

  .cell{
    margin: .3em;
  }

  .wrapper{
    display: flex;
  }

  .callout{
    flex: 1 1 auto;
    font-size: 10vh;
  }

</style>
