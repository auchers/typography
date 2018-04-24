<template>
  <div class="mainNav">
    <header>
      <h1>{{title}}</h1>
      <p>{{'by '+ author}}</p>
    </header>
      <h3>
      <router-link to="/4">Version 4</router-link>
    </h3>
    <h3>
      <router-link to="/5">Version 5</router-link>
    </h3>
    <!--<h3>-->
      <!--<router-link to="/3">Version 3</router-link>-->
    <!--</h3>-->
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
    margin-bottom: 4em;
  }

  h1{
    font-weight: lighter;
  }

  h3{
    margin:0 3em 0  0;
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

</style>
