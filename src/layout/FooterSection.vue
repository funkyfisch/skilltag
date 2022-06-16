<script setup lang="ts">
const appVersion = __APP_VERSION__;
const gitCommit = __GIT_COMMIT__;
</script>

<template>
  <footer class="bg-gray-300 p-2.5">
    <div class="grid justify-items-center">
      <span> Build version: {{ appVersion }} Commit: {{ gitCommit }} </span>
    </div>
  </footer>
</template>
