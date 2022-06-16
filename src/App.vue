<script setup lang="ts">
import NavBar from "@/layout/NavBar.vue";
import FooterSection from "./layout/FooterSection.vue";
import ContentSection from "./layout/ContentSection.vue";
</script>

<template>
  <div class="flex flex-col h-screen">
    <nav-bar />
    <content-section />
    <footer-section />
  </div>
</template>
