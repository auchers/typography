<template>
  <div class="mainNav">
    <header>
      <h1>{{title}}</h1>
      <h3>{{'by '+ author}}</h3>
    </header>
      <p>(5 Iterations for ‘Typography and Visual Design‘ at Parson School of Design)</p>
    <h3>
      <router-link to="/1">Version 1</router-link>
    </h3>
    <h3>
      <router-link to="/2">Version 2</router-link>
    </h3>
    <h3>
      <router-link to="/3">Version 3</router-link>
    </h3>
    <h3>
      <router-link to="/4">Version 4 [FINAL]</router-link>
    </h3>
    <h3>
      <router-link to="/5">Version 5</router-link>
    </h3>
  </div>
</template>

<script>
  export default {
    name: 'MainNav',
    props: ['title', 'author', 'text'],
    data () {
      return {
        msg: 'This is the Main Navigation'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  body{
    font-family: Futura;
  }

  header{
    /*margin-bottom: 4em;*/
  }

  h1{
    font-weight: lighter;
  }

  h3{
    margin:0 2em 0  0;
    display: inline-flex;
    font-weight: normal;
  }

  a{
    text-decoration: none;
    color: unset;
  }

  a:hover{
    font-weight: bolder;
  }
  .mainNav{
    margin: 2em;
  }

</style>
