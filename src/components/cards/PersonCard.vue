<script setup lang="ts">
const props = defineProps({
  profile: {
    type: Object,
    default: () => {
      return {
        name: "",
        email: "",
        avatar: "",
      };
    },
  },
});
</script>

<template>
  <div class="h-auto w-64 border-2 border-slate-500 p-2 rounded-xl">
    <div class="grid grid-cols-2 gap-2 justify-items-start">
      <img class="rounded-full h-12 w-12" :src="props.profile.avatar" />
      <div class="text-xl font-bold">{{ props.profile.name }}</div>
    </div>
    <div class="text-sm">{{ props.profile.email }}</div>
  </div>
</template>
