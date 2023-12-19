<script setup lang="ts">
import AdminIcon from "@components/common/AdminIcon.vue";

interface Props {
  placeholder: string;
  name: string;
  type: "text";
  iconName?: string;
  label?: string;
  debounce?: boolean;
}

defineProps<Props>();
const emit = defineEmits<{ change: [value: string] }>();

const onInputChange = async (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit("change", target.value);
};
</script>

<template>
  <div class="relative flex flex-col gap-3">
    <label v-if="label" :for="label" class="font-light">{{ label }}</label>
    <input
      class="w-full font-light h-[52px] px-3 py-4 rounded-sm border-solid border-[2px]"
      :class="{ 'pl-[60px]': iconName }"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :label="label ?? ''"
      :id="label ?? ''"
      @input="onInputChange"
    />
    <div
      v-if="iconName"
      class="pl-[20px] absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
    >
      <AdminIcon :file-name="iconName" />
    </div>
  </div>
</template>
