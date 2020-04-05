<template>
  <div class="card">
    <div class="card-header">
      <p class="card-header-title">{{ fullName }}</p>
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
  props: ["fullName", "tags"]
};
</script>

<style></style>
