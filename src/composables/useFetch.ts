import { ref } from "vue";

const BaseApiUrl = "https://dummyjson.com";

export const useFetch = async <T>(
  url: string,
  query?: Record<string, string>,
) => {
  const data = ref<T>();
  const error = ref<null | string>(null);
  const isLoading = ref(true);

  const params = new URLSearchParams();
  for (const key in query) {
    params.append(key, query[key]);
  }

  try {
    const response = await fetch(BaseApiUrl + url + `?${params.toString()}`);
    if (!response.ok) {
      error.value = `HTTP error occurred: ${response.status}`;
    }
    data.value = await response.json();
  } catch {
    error.value = "Something went wrong";
  } finally {
    isLoading.value = false;
  }

  return { data, isLoading, error };
};
