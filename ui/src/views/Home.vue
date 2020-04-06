<template>
  <div class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column">
            <b-loading :active="isLoading"></b-loading>
            <b-field grouped>
              <b-input placeholder="Search..." expanded v-model="searchText">
              </b-input>
            </b-field>
          </div>
        </div>

        <div class="columns">
          <div class="column" style="padding: 1.50rem">
            <div class="columns is-multiline is-vcentered" id="results">
              <div
                v-for="bio in this.searchResult"
                :key="bio.id"
                class="column is-3"
              >
                <profile-tile :fullName="bio.name" :tags="bio.tags" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import matchSorter from "match-sorter";
import ProfileTile from "@/components/ProfileTile.vue";
import bioService from "@/services/bioService.js";

export default {
  name: "home",
  components: {
    ProfileTile
  },
  watch: {
    searchText: function() {
      this.getDebouncedSearchResults();
    }
  },
  created: function() {
    this.getBios();
  },
  mounted: function() {
    this.getDebouncedSearchResults = _.debounce(this.getSearchResults, 300);
    this.getDebouncedSearchResults();
  },
  methods: {
    getSearchResults: function() {
      if (this.searchText === "") this.searchResult = this.bios;
      else {
        this.searchResult = matchSorter(this.bios, this.searchText, {
          minRanking: matchSorter.rankings.WORD_STARTS_WITH,
          maxRanking: matchSorter.rankings.CONTAINS,
          keys: ["tags"]
        });
      }
    },
    getBios: async function() {
      try {
        this.isLoading = true;
        this.bios = await bioService.getBios();
      } catch (error) {
        this.$buefy.notification.open({
          duration: 3000,
          message: `${error.message}`,
          position: "is-bottom-right",
          type: "is-danger",
          hasIcon: false
        });
      } finally {
        this.isLoading = false;
      }
    }
  },
  data() {
    return {
      searchText: "",
      searchResult: "",
      bios: [],
      isLoading: false
    };
  }
};
</script>

<style lang="scss" scoped>
#results {
  overflow-y: auto;
  max-height: 85vh;
  padding-left: 0rem;
  padding-right: 0rem;
  overflow: overlay;
  // background-color: gray;
  // border-radius: 2rem;
}
/* width */
::-webkit-scrollbar {
  width: 0.25rem;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 0.25rem;
}

::-webkit-scrollbar-corner {
  background-color: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(210, 210, 210, 0.7);
  border-radius: 0.25rem;
  border-top: 0.75rem solid rgba(0, 0, 0, 0);
  border-bottom: 0.75rem solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
  -webkit-border-radius: 0.25rem;
}
</style>
