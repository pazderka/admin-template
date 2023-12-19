<script setup lang="ts">
import { onMounted, ref } from "vue";
import AdminIcon from "@components/common/AdminIcon.vue";
import AdminInputText from "@components/common/AdminInputText.vue";
import AdminDashboardList from "@components/dashboard/AdminDashboardList.vue";
import AdminDashboardFilterForm from "@components/dashboard/AdminDashboardFilterForm.vue";
import { useFetch } from "@composables/useFetch";
import { URLS } from "@/Urls";
import { ProductResponseInterface } from "@/types";

const productList = ref<ProductResponseInterface>({ products: [] });
const productListLoading = ref(true);
const productListTyping = ref(false);
const productListTimeout = ref<ReturnType<typeof setTimeout>>();

onMounted(async () => {
  const { data, isLoading } = await useFetch<ProductResponseInterface>(
    URLS.api.productList(),
    { limit: "10" },
  );
  const products = data.value?.products;
  if (products) {
    productList.value.products = products;
    productListLoading.value = isLoading.value;
  }
});

const onChangeSearch = (value: string) => {
  productList.value = { products: [] };
  productListTyping.value = true;
  productListLoading.value = true;

  clearTimeout(productListTimeout.value);
  productListTimeout.value = setTimeout(async () => {
    productListTyping.value = false;
    const { data, isLoading } = await useFetch<ProductResponseInterface>(
      URLS.api.productListSearch(),
      { q: value, limit: "10" },
    );
    const products = data.value?.products;
    if (products) {
      productList.value.products = products;
      productListLoading.value = isLoading.value;
    }
  }, 300);
};
</script>

<template>
  <section class="flex lg:justify-between flex-wrap gap-4 lg:gap-0">
    <AdminInputText
      class="lg:w-[655px] sm:w-[50%] order-2 lg:order-1"
      placeholder="search"
      name="product-search"
      type="text"
      icon-name="search-normal"
    />
    <div class="h-[52px] flex gap-6 order-1 lg:order-2">
      <div class="w-[52px] bg-white rounded relative">
        <div
          class="h-full flex items-center justify-center before:rounded-[50%] before:translate-x-[-50%] before:left-[100%] before:top-0 before:bg-orange-main before:content-[''] before:w-[10px] before:h-[10px] before:absolute"
        >
          <AdminIcon file-name="notification-bing" />
        </div>
      </div>
      <img
        alt="avatar-photo"
        class="w-[52px]"
        src="@assets/images/profile-avatar.png"
      />
    </div>
  </section>

  <article class="mt-12 mb-6">
    <header>
      <h1 class="text-2xl">Products information</h1>
    </header>
    <AdminDashboardFilterForm @change="onChangeSearch" />
    <AdminDashboardList
      :product-list="productList"
      :product-list-loading="productListLoading"
      :sort-columns="['title', 'brand']"
    />
  </article>
</template>
