import ApiService from "./ApiService";

export const getProducts = () => {
  const url = "/products";
  // "https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json";
  return ApiService.get(url);
};
