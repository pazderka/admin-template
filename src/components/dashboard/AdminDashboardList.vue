<script setup lang="ts">
import AdminInputCheckbox from "@components/common/AdminInputCheckbox.vue";
import AdminIcon from "@components/common/AdminIcon.vue";
import { URLS } from "@/Urls";
import { type ProductResponseInterface } from "@/types";
import { ref, computed } from "vue";

interface Props {
  productList: ProductResponseInterface;
  productListLoading: boolean;
  sortColumns: string[];
}

const props = defineProps<Props>();

const productListColumn = [
  "title",
  "category",
  "brand",
  "price",
  "stock",
  "rating",
] as const;
type ProductListItemType = (typeof productListColumn)[number];
const sortBy = ref<ProductListItemType>("brand");
const sortDesc = ref(true);

const sortedProductList = computed(() => {
  return [...props.productList.products].sort((a, b) => {
    const sortValue = sortBy.value;
    const firstSortItem = a[sortValue] as string;
    const secondSortItem = b[sortValue] as string;

    if (sortDesc.value) {
      return firstSortItem.localeCompare(secondSortItem);
    }
    return secondSortItem.localeCompare(firstSortItem);
  });
});

const onChangeSort = (column: ProductListItemType) => {
  sortBy.value = column;
  sortDesc.value = !sortDesc.value;
};
</script>

<template>
  <div class="overflow-auto">
    <table class="table-fixed w-[900px] lg:w-full mt-6 bg-white">
      <thead class="border-b-[1px] text-md">
        <tr>
          <th
            class="text-left font-medium py-6"
            v-for="(column, index) in productListColumn"
            :key="index"
          >
            <div class="flex">
              <div v-if="index === 0" class="flex gap-4 ml-5">
                <AdminInputCheckbox />
                <span class="capitalize">{{ column }}</span>
              </div>
              <span v-else class="capitalize">{{ column }}</span>
              <button
                v-if="sortColumns.includes(column)"
                class="ml-2"
                @click="onChangeSort(column)"
              >
                <template v-if="sortBy === column">
                  <AdminIcon v-if="sortDesc" file-name="arrow-up" />
                  <AdminIcon v-if="!sortDesc" file-name="arrow-down" />
                </template>
                <AdminIcon v-else file-name="arrow-up" />
              </button>
            </div>
          </th>
        </tr>
      </thead>
      <tbody class="font-regular">
        <template v-if="productListLoading">
          <tr>
            <td v-if="productListLoading" colspan="6" class="text-center py-4">
              Data is loading...
            </td>
          </tr>
        </template>
        <template v-else>
          <td
            v-if="!sortedProductList.length"
            colspan="6"
            class="text-center py-4"
          >
            No data found.
          </td>
          <template v-else>
            <tr
              v-for="product in sortedProductList"
              :key="product.id"
              class="border-t-[1px] border-top-solid"
            >
              <td class="py-6 flex items-center gap-4 ml-5">
                <AdminInputCheckbox />
                <RouterLink
                  :to="URLS.view.productDetail(product.id)"
                  class="max-w-[50%] text-link"
                  >{{ product.title }}</RouterLink
                >
              </td>
              <td class="opacity-60">{{ product.category }}</td>
              <td class="opacity-60">{{ product.brand }}</td>
              <td class="opacity-60">{{ product.price }}</td>
              <td class="opacity-60">{{ product.stock }}</td>
              <td class="opacity-60">{{ product.rating }}</td>
            </tr>
          </template>
        </template>
      </tbody>
    </table>
  </div>
</template>
