<script setup lang="ts">
import PersonCard from "@/components/cards/PersonCard.vue";
const profiles = [
  {
    name: "John Doe",
    email: "john.doe@gmail.com",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Doe",
    email: "jane.doe@gmail.com",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "John Smith",
    email: "john.smith@gmail.com",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@gmail.com",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Jane Doe",
    email: "jane.doe@gmail.com",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "John Smith",
    email: "john.smith@gmail.com",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@gmail.com",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Jane Doe",
    email: "jane.doe@gmail.com",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "John Smith",
    email: "john.smith@gmail.com",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@gmail.com",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];
</script>

<template>
  <div
    class="grid gap-4 grid-cols-1 justify-items-center mb-auto px-12 pt-4 pb-4"
  >
    <input
      type="text"
      placeholder="Search for people, skills, or projects"
      class="border-cyan-700 focus:border-cyan-300 active:border-cyan-900 border-2 focus:border-2 active:border-2 rounded-xl h-12 w-96 text-xl p-4 overflow-y-auto"
    />
    <div class="grid grid-cols-3 gap-4 justify-items-center w-auto">
      <person-card
        v-for="profile in profiles"
        :key="profile.email"
        :profile="profile"
      />
    </div>
  </div>
</template>
