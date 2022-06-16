<script setup lang="ts">
import { RouterLink } from "vue-router";
import LogoIcon from "@/components/icons/LogoIcon.vue";
import LogoType from "@/components/icons/LogoType.vue";
</script>

<template>
  <div>
    <nav class="bg-ivory px-2 sm:px-4 py-2.5 dark:bg-gray-800">
      <div class="flex flex-wrap mx-auto justify-between items-center">
        <router-link
          to="/"
          class="flex justify-between items-center mr-10 w-auto"
        >
          <a href="#" class="flex items-center">
            <logo-icon
              alt="Skilltag Logo Icon"
              :class="'fill-brand h-8 w-8 mr-2'"
            />
            <logo-type
              alt="Skilltag Logo Type"
              :class="'flex flex-no-shrink fill-brand h-8 w-16'"
            />
          </a>
        </router-link>

        <div class="flex justify-between items-center mr-10 w-auto">
          <ul
            class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
          >
            <li>
              <router-link to="/">
                <a
                  href="#"
                  class="block py-2 pr-4 pl-3 text-white bg-brand rounded md:bg-transparent md:p-0"
                  :class="{
                    'text-brand': $route.path === '/',
                    'text-gray-700': $route.path !== '/',
                  }"
                  >Home</a
                >
              </router-link>
            </li>
            <li>
              <router-link to="/about">
                <a
                  href="#"
                  class="block py-/2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-brand md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  :class="{
                    'text-brand': $route.path === '/about',
                    'text-gray-700': $route.path !== '/about',
                  }"
                  >About</a
                >
              </router-link>
            </li>
          </ul>
        </div>

        <div class="flex items-center">
          <button
            class="flex ml-8 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            type="button"
          >
            <img
              class="w-10 h-10 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
              alt="user photo"
            />
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>
