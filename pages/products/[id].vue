<template>
  <div>
    <div class="flex items-center justify-between gap-8 py-12">
        <div class="w-1/3 bg-slate-100 p-4 rounded">
            <NuxtImg v-if="product.image" :src=product.image :alt=product.title class="w-full" />
        </div>
        <div class="w-2/3 flex flex-col gap-4">
            <p>Title: Product Title</p>
            {{ product }}
            <button @click="handleAddtoCart(product, 1)" class="w-full max-w-48 text-center bg-purple-200 rounded py-1">add to cart</button>
        </div>
    </div>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
console.log(id, "asad");
const product = ref([""]);
const res = await $fetch(`https://fakestoreapi.com/products/${id}`);
product.value = res;
const {addProduct}=useCartStore()
// console.log(products, "asad");
function handleAddtoCart(product, count){
    // console.log(product, count);
    addProduct(product,count)
    
}
</script>
