import Vue from 'vue';
import template from './sandwichs.html';

import { LoadingState } from 'src/main';
import { sandwichResource } from 'src/helpers/resources';

export default Vue.extend({
  template,

  data() {
    return {
      sandwichs: [],
      filteredSandwichs: [],
      searchQuery: ''
    };
  },

  created(){
    this.fetchSandwichs();
  },

  methods: {
    fetchSandwichs(){
      LoadingState.$emit('toggle', true);
      return sandwichResource.get().then((response) => {
        this.sandwichs = response.data;
        LoadingState.$emit('toggle', false);
      }, (errorResponse) => {
        // Handle error...
        console.log('API responded with:', errorResponse.status);
        LoadingState.$emit('toggle', false);
      });
    }
  },

  computed: {
    filteredSandwichs: function() {
      var self = this;

      if (self.searchQuery === '') {
        return self.sandwichs;
      }

      return self.sandwichs.filter(function(sandwich) {
        return self.searchQuery.split(' ').every(function(ingredient) {
          return sandwich.content.indexOf(ingredient) !== -1;
        });
      });
    }
  }
});
