<template>
  <div>
    <div class="modal-card" style="width: 25vw">
      <header class="modal-card-head">
        <h3 class="title is-3">New Bio</h3>
      </header>

      <section class="modal-card-body">
        <div class="container">
          <b-field label="Full name">
            <b-input
              type="fullname"
              v-model="fullname"
              placeholder="e.g. John Doe"
              required
            >
            </b-input>
          </b-field>

          <b-field label="Email">
            <b-input
              type="email"
              v-model="email"
              placeholder="e.g. john.doe@gmail.com"
              required
            >
            </b-input>
          </b-field>

          <b-field label="Skills/Titles">
            <b-taginput
              v-model="tags"
              icon="tag"
              placeholder="e.g. UI Designer, Photography, C++"
              ellipsis
            >
            </b-taginput>
          </b-field>
          <b-message v-if="creationFailure" type="is-danger">
            Could not create new member. Try again later.
          </b-message>
        </div>
      </section>

      <footer class="modal-card-foot" style="justify-content: flex-end;">
        <b-field grouped>
          <p class="control is-pulled-right">
            <b-button @click="$parent.close()">
              Cancel
            </b-button>
          </p>
          <p class="control">
            <b-button type="is-primary" @click="submitNewBio($parent)">
              Add Member
            </b-button>
          </p>
        </b-field>
      </footer>
    </div>
  </div>
</template>

<script>
import bioService from "@/services/bioService";
export default {
  name: "NewBioModal",
  data() {
    return {
      fullname: "",
      email: "",
      tags: [],
      creationFailure: false
    };
  },
  methods: {
    submitNewBio: async function(parentElement) {
      try {
        this.creationFailure = false;
        await bioService.createNewBio(this.fullname, this.email, this.tags);
        parentElement.close();
        this.$buefy.notification.open({
          duration: 3000,
          message: `Created bio for ${this.fullname}!`,
          position: "is-bottom-right",
          type: "is-success",
          hasIcon: false
        });
        this.$router.push("/");
      } catch (error) {
        this.creationFailure = true;
      }
    }
  }
};
</script>

<style></style>
