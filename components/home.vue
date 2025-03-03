<template>
  <div>
    <p class="text-center font-semibold pt-12">All Products</p>
    <div class="grid grid-cols-5 gap-4 py-12">
      <div v-for="product in products" :key="product.id">
        <UCard>
            <nuxt-link :to="`/products/${product.id}`">
                <img class="h-24 mx-auto" :src="product.image" :alt="product.title">
                <p class="truncate">{{ product.title }}</p>
            </nuxt-link>
            <button @click="handleAddtoCart(product, 1)" class="w-full text-center bg-purple-200 rounded py-1">add to cart</button>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup>
const products = ref([""]);
const res = await $fetch("https://fakestoreapi.com/products");
products.value = res;
const {addProduct}=useCartStore()
// console.log(products, "asad");
function handleAddtoCart(product, count){
    // console.log(product, count);
    addProduct(product,count)
    
}
</script>

<style scoped></style>
