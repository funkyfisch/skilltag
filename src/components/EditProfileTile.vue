<template>
  <div class="card" v-on-clickaway="onClickAway">
    <div class="card-content">
      <b-field>
        <b-input v-model="editableFullname" />
      </b-field>
      <p class="subtitle is-6">{{ email }}</p>
      <b-field>
        <b-taginput v-model="editableTags" icon="tag" ellipsis />
      </b-field>
      <b-button
        @click="$emit('saveAndEndEdit', getConstructedBio())"
        inverted
        type="is-success"
        icon-right="check"
      />
      <b-button
        @click="$emit('cancelAndEndEdit')"
        inverted
        type="is-danger"
        icon-right="times"
      />
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  mixins: [clickaway],
  name: "EditProfileTile",
  props: ["fullname", "email", "tags"],
  methods: {
    getConstructedBio: function() {
      return {
        fullname: this.editableFullname,
        email: this.editableEmail,
        tags: this.editableTags
      };
    },
    onClickAway: function() {
      this.$emit("cancelAndEndEdit");
    }
  },
  data() {
    return {
      editableFullname: "",
      editableEmail: "",
      editableTags: []
    };
  },
  mounted: function() {
    this.editableFullname = this.fullname;
    this.editableEmail = this.email;
    this.editableTags = [].concat(this.tags);
  }
};
</script>

<style></style>
