export const URLS = {
  api: {
    productDetail: (id: number) => `/products/${id}`,
    productList: () => "/products",
    productListSearch: () => "/products/search",
  },
  view: {
    productDetail: (id: number) => `/products/${id}`,
    home: () => "/",
  },
};
