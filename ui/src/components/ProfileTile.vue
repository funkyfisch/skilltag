<template>
  <div class="card">
    <div class="card-content">
      <p class="title is-4">{{ fullname }}</p>
      <p class="subtitle is-6">{{ email }}</p>
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
  props: ["fullname", "email", "tags"]
};
</script>

<style></style>
