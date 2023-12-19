<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { useFetch } from "@composables/useFetch";
import { URLS } from "@/Urls";
import { useRoute } from "vue-router";
import { type ProductItemInterface } from "@/types";

const route = useRoute();
const productDetail = ref<ProductItemInterface | null>(null);
const productLoading = ref(true);

const productDetailTransformer = computed(() => ({
  title: productDetail.value?.title,
  category: productDetail.value?.category,
  brand: productDetail.value?.brand,
  price: productDetail.value?.price,
  stock: productDetail.value?.stock,
  rating: productDetail.value?.rating,
}));

onMounted(async () => {
  const { data, isLoading } = await useFetch<ProductItemInterface>(
    URLS.api.productDetail(Number(route.params.id)),
  );
  const detail = data.value;

  if (detail) {
    productDetail.value = detail;
    productLoading.value = isLoading.value;
  }
});
</script>

<template>
  <RouterLink class="text-link" :to="URLS.view.home()">Back to list</RouterLink>
  <h1 class="text-3xl block pt-6 pb-3">Product detail</h1>
  <div v-if="productLoading">Data is loading...</div>
  <dl v-else>
    <div v-for="(value, key) in productDetailTransformer" class="flex gap-2">
      <dt class="capitalize font-medium">{{ key }}:</dt>
      <dd>{{ value }}</dd>
    </div>
  </dl>
</template>
