<script setup lang="ts">
import AdminNavbar from "@components/common/AdminNavbar.vue";
import AdminIcon from "@components/common/AdminIcon.vue";
import { ref } from "vue";

const isVisible = ref(window.innerWidth >= 1020);

const onToggleMenu = () => {
  isVisible.value = !isVisible.value;
};
</script>

<template>
  <div
    class="lg:hidden h-[24px] w-[24px] absolute right-[5%] top-[3%] cursor-pointer"
    @click="onToggleMenu"
  >
    <AdminIcon file-name="menu" />
  </div>
  <div class="flex h-full">
    <aside
      v-if="isVisible"
      class="bg-white min-w-[230px] fixed z-[1] h-full lg:h-auto lg:relative"
    >
      <AdminNavbar />
    </aside>
    <main class="mt-14 mx-6 lg:mx-10 w-full">
      <slot />
    </main>
  </div>
</template>
