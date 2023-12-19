<script setup lang="ts">
import { defineAsyncComponent } from "vue";

interface Props {
  fileName: string;
}

const props = defineProps<Props>();

// Path aliases dont seem to work for dynamic import
const Icon = defineAsyncComponent(
  () => import(`../../assets/icons/${props.fileName}.svg`),
);
</script>

<template>
  <Icon />
</template>
