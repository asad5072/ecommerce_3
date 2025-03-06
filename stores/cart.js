import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    products: [],
  }),
  actions: {
    addProduct(product, count) {
      const isinList = this.products.find((p) => p.id === product.id);
      if (isinList) {
        this.products = this.products.map((p) => {
          if (p.id === product.id) {
            p.count += count;
          }
          return p;
        });
      } else {
        this.products.push({ ...product, count });
      }
    },

    increaseCartItem(id) {
        const product = this.products.find((p) => p.id === id);
        if (product) {
          product.count += 1;
        }
      },
      
      decreaseCartItem(id) {
        const product = this.products.find((p) => p.id === id);
        if (product && product.count > 1) {
          product.count -= 1;
        } 
      },
      
  },
});
