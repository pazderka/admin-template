<script setup lang="ts">
import AdminIcon from "@components/common/AdminIcon.vue";

const navbarItems = [
  { id: "dashboard", name: "Dashboard", iconName: "dashboard", to: "/" },
  { id: "labTest", name: "Lab Test", iconName: "lab-test", to: "/lab-test" },
  {
    id: "appointment",
    name: "Appointment",
    iconName: "appointment",
    to: "/appointment",
  },
  {
    id: "medicineOrder",
    name: "Medicine Order",
    iconName: "medicine-order",
    to: "/medicine-order",
  },
  { id: "message", name: "Message", iconName: "message", to: "/message" },
  { id: "payments", name: "Payments", iconName: "payments", to: "/payments" },
  { id: "settings", name: "Settings", iconName: "settings", to: "/settings" },
  { id: "help", name: "Help", iconName: "help", to: "/help" },
];
</script>

<template>
  <h1 class="pt-[56px] pb-[60px] text-2xl text-primary pl-8">Sales.</h1>
  <ul class="flex flex-col gap-6">
    <li
      v-for="(item, index) in navbarItems"
      :key="item.id"
      :class="{ 'absolute bottom-0 w-full': index === navbarItems.length - 1 }"
    >
      <RouterLink
        :to="item.to"
        class="flex font-regular py-2 pl-10"
        active-class="text-secondary border-primary border-l-[3px] border-3 border-solid [&>div>svg>path]:fill-current"
        v-slot="{ isActive }"
      >
        <div class="flex gap-4" :class="{ 'opacity-60': !isActive }">
          <AdminIcon :file-name="item.iconName" />
          {{ item.name }}
        </div>
      </RouterLink>
    </li>
  </ul>
</template>
