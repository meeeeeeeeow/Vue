<template>
  <div>
    <h1>{{ animals.name }} ({{ $route.params.species }})</h1>
    <p>Age: {{ animals.age }}</p>
    <p>Breed: {{ animals.breed }}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      animals: {}
    }
  },
  computed: {
    // same as:
    // cats() {
    //   return this.$store.state.cats
    // }
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  mounted () {
    // same as: this['cats'][0]
    const animals = this[this.$route.params.species][this.$route.params.id]
    this.animals = animals
  }
}
</script>
