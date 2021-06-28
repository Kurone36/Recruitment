// @vue/component
import axios from 'axios'
import VsPagination from 'vs-pagination'

const pageNumber = 2

export default {
  name: 'PlanetsList',
  components: {
    VsPagination
  },
  data () {
    return {
      lists: [],
      pageNumber: 1,
      page: 1,
      isLoading: true
    }
  },
  mounted () {
    axios
      .get(`https://swapi.dev/api/planets/?page=${pageNumber}`)
      .then(response => (this.lists = response.data.results))
      .then(console.log(this.lists.sort()))
    setTimeout(() => {
      this.isLoading = false
    }, 2000)
  }
}
