// @vue/component
import axios from 'axios'
import VSPagination from 'vs-pagination'
var pageNumber = 3

export default {
  name: 'PlanetsList',
  components: {
    VSPagination
  },
  data () {
    return {
      lists: [],
      currentPage: 3,
      isLoading: true,
      pageNumber: 3
    }
  },
  mounted () {
    axios
      .get(`https://swapi.dev/api/planets/?page=${pageNumber}`)
      .then(response => (this.lists = response.data.results), (this.currentPage))
    setTimeout(() => {
      this.isLoading = false
    }, 2000)
  }
}
