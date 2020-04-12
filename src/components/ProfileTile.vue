<template>
  <div class="card" @mouseover="isActive = true" @mouseleave="isActive = false">
    <div class="card-content">
      <b-button
        v-show="isActive"
        @click="$emit('startEdit')"
        inverted
        type="is-primary"
        class="is-pulled-right"
        icon-right="edit"
      />
      <div class="block">
        <p class="title is-4">{{ fullname }}</p>
        <p class="subtitle is-6">{{ email }}</p>
      </div>
    </div>

    <div class="card-content">
      <b-taglist class="content">
        <b-tag v-for="(tag, index) in this.tags" :key="index" type="is-primary">
          {{ tag }}
        </b-tag>
      </b-taglist>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileTile",
  props: ["fullname", "email", "tags"],
  data() {
    return {
      isActive: false
    };
  }
};
</script>

<style></style>
