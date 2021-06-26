// @vue/component
import axios from 'axios'

export default {
  name: 'PlanetsList',
  data () {
    return {
      lists: [],
      isLoading: true
    }
  },
  mounted () {
    axios
      .get('https://swapi.dev/api/planets/')
      .then(response => (this.lists = response.data.results))
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
  }
}
