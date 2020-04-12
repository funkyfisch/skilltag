<template>
  <div class="hero">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column">
            <b-loading :active="isLoading" />
            <b-field grouped>
              <b-input
                placeholder="Search for skills and titles, e.g. 'Mechanical Engineer', 'Project management', 'C\C++'"
                expanded
                v-model="searchText"
              >
              </b-input>
              <div class="buttons">
                <b-button
                  icon-left="sync-alt"
                  type="is-primary"
                  @click="refreshList()"
                />
                <b-button
                  icon-left="plus"
                  type="is-primary"
                  @click="isModalActive = true"
                >
                  Add Member
                </b-button>
              </div>
            </b-field>
          </div>
        </div>

        <div class="columns">
          <div class="column" style="padding: 1.50rem">
            <div class="columns is-multiline is-vcentered" id="results">
              <div
                v-for="bio in this.searchResult"
                :key="bio.email"
                class="column is-3"
              >
                <profile-tile
                  v-if="!bio.isEditingActive"
                  :fullname="bio.fullname"
                  :email="bio.email"
                  :tags="bio.tags"
                  v-on:startEdit="onStartEditReceived(bio.email)"
                />
                <edit-profile-tile
                  v-else
                  :fullname="bio.fullname"
                  :email="bio.email"
                  :tags="bio.tags"
                  :ref="bio.email"
                  v-on:saveAndEndEdit="
                    newBio => onSaveAndEndEditReceived(bio.email, newBio)
                  "
                  v-on:cancelAndEndEdit="onCancelAndEndEditReceived(bio.email)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal
      :active.sync="isModalActive"
      has-modal-card
      trap-focus
      aria-role="dialog"
      aria-modal
    >
      <new-bio-modal />
    </b-modal>
  </div>
</template>

<script>
import _ from "lodash";
import matchSorter from "match-sorter";

import ProfileTile from "@/components/ProfileTile.vue";
import EditProfileTile from "@/components/EditProfileTile.vue";
import NewBioModal from "@/components/NewBioModal.vue";
import bioService from "@/services/bioService.js";

export default {
  name: "home",
  components: {
    ProfileTile,
    EditProfileTile,
    NewBioModal
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
    biosEqual: function(oldBio, newBio) {
      return (
        oldBio.fullname === newBio.fullname &&
        oldBio.email === newBio.email &&
        oldBio.tags
          .sort()
          .every((tag, index) => tag === newBio.tags.sort()[index])
      );
    },
    onStartEditReceived: function(email) {
      const bioToEditIndex = this.bios.findIndex(b => b.email === email);
      const bioToEdit = this.bios[bioToEditIndex];
      bioToEdit.isEditingActive = true;
      this.bios[bioToEditIndex] = bioToEdit;
      this.bios.splice();
    },
    onCancelAndEndEditReceived: function(email) {
      const oldBioIndex = this.bios.findIndex(b => b.email === email);
      const oldBio = this.bios[oldBioIndex];
      oldBio.isEditingActive = false;
      this.bios[oldBioIndex] = oldBio;
      this.bios.splice();
    },
    onSaveAndEndEditReceived: async function(email, newBio) {
      const oldBioIndex = this.bios.findIndex(b => b.email === email);
      const oldBio = this.bios[oldBioIndex];
      if (this.biosEqual(oldBio, newBio)) {
        oldBio.isEditingActive = false;
        this.bios[oldBioIndex] = oldBio;
      } else {
        try {
          await bioService.updateBio(
            newBio.fullname,
            newBio.email,
            newBio.tags
          );
          newBio.isEditingActive = false;
          Object.assign(this.bios[oldBioIndex], newBio);
          this.bios.splice();
        } catch (error) {
          this.$buefy.notification.open({
            duration: 1500,
            message: `Failed to edit bio for ${newBio.email}`,
            position: "is-bottom-right",
            type: "is-danger",
            hasIcon: false
          });
        }
      }
    },
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
    },
    refreshList: async function() {
      await this.getBios();
      await this.getDebouncedSearchResults();
    }
  },
  data() {
    return {
      searchText: "",
      searchResult: "",
      bios: [],
      isLoading: false,
      isModalActive: false
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
