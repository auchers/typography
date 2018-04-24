<template>
  <div id="app">
    <router-view
      :title="title"
      :author="author"
      :text="text"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      title: 'Barefoot Filmmaking Manifesto',
      author: 'Sally Potter',
      text: [{
        "main": "The best time to start is now",
        "sub": "(don’t wait)"
      },
        {
          "main": "Take responsibility for everything",
          "sub": "(it saves time)"
        },
        {
          "main": "Don’t blame anyone or anything",
          "sub": "(including yourself)"
        },
        {
          "main": "Give up being a moviemaker victim",
          "sub": "(of circumstance, weather, lack of money, mean financiers, vicious critics, greedy distributors, indifferent public, etc.)"
        },
        {
          "main": "You can’t always choose what happens while you are making a film, but you can choose your point of view about what happens",
          "sub": "(creative perspective)"
        },
        {
          "main": "Mistakes are your best teacher",
          "sub": "(so welcome them)"
        },
        {
          "main": "Turn disaster to advantage",
          "sub": "(there will be many)"
        },
        {
          "main": "Only work on something you believe in",
          "sub": "(life is too short to practice insincerity)"
        },
        {
          "main": "Choose your team carefully and honour them",
          "sub": "(never speak negatively about your, colleagues)"
        },
        {
          "main": "Ban the word 'compromise' (or the phrase 'it will do')",
          "sub": "(the disappointment in yourself will haunt you later)"
        },
        {
          "main": "Be prepared to work harder than anyone you are employing"
        },
        {
          "main": "Be ruthless – be ready to throw away your favourite bits",
          "sub": "(you may well be, attached to what is familiar rather than what is good)"
  },
    {
      "main": "Aim beyond your limits (and help others to go beyond theirs)",
      "sub": "(the thrill of the learning curve)"
    },
    {
      "main": "When in doubt, project yourself ten years into the future and look back  – what will you be proud of having done?",
      "sub": "(indecision is a lack of the longer view or wider perspective)"
    },
    {
      "main": "Practice no waste – psychic ecology – prevent brain pollution",
      "sub": "(don’t add to the proliferation of junk)"

    },
    {
      "main": "Be an anorak – keep your sense of wonder and enthusiasm",
      "sub":"(cynicism will kill your joy and motivation)"
    },
    {
      "main": "Get some sleep when you can",
      "sub": "(you wont get much later)"
    }]
    }
  }
}
</script>

<style>
  body{
    margin: 0px;
  }
</style>


