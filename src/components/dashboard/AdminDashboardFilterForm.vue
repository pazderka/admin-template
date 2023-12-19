<script setup lang="ts">
import { defineEmits } from "vue";
import AdminInputText from "@components/common/AdminInputText.vue";

defineEmits<{ change: [value: string] }>();
</script>

<template>
  <form class="flex flex-wrap gap-2 mt-6 mb-8">
    <AdminInputText
      label="Title"
      class="w-[266px]"
      placeholder="Enter title"
      name="title"
      type="text"
      @change="$emit('change', $event)"
    />
    <AdminInputText
      label="Brand"
      class="w-[266px]"
      placeholder="Enter brand"
      name="brand"
      type="text"
      @change="$emit('change', $event)"
    />
  </form>
</template>
