<template>
  <div class="wrapper">
    <!--<h2>{{title}}</h2>-->
    <template class="line" v-for="(line, i) in text">
      <div class="line"
      v-bind:style="getLinePosition(i)">
        <p class="main"
          v-bind:style="getMainPosition(i)">
          {{line.main}}
        </p>
        <p class="sub"
           v-bind:style="getSubPosition(i)">
          {{line.sub}}
        </p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Version1',
  props: ['title', "text"],
  data () {
    return {
      msg: 'This is Version1',
      scrollDist: 90,
    }
  },
  methods: {
    getLinePosition: function (i){
      return {'height': (i === 0) ? '120vh' : 'unset'};
    },
    getMainPosition: function (i){
     return (i === 0) ? {'top': (this.scrollDist) + 'vh',
          "position": "sticky"} : null
    },
    getSubPosition: function (i){
      return (i === 0) ? {'top': (this.scrollDist + 10) + 'vh',
        "position": "sticky",
        "margin-bottom": '0'} : null
    }


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .wrapper{
    margin: 3em;
    font-family: Scala, Serif;
  }

  .main{
    font-size: 3em;
    position:sticky;
    top:80vh;
  }

</style>
