<template>
  <div>
    {{ products }}
    <p>Cart Page</p>
    <div v-for="product in products" :key="product.id">
      <p>Title: {{ product.title }}</p>
      <div class="flex rounded-md overflow-hidden w-32">
        <UButton
          @click="decreaseCartItem(product.id)"
          label="-"
          color="white"
          class="border"
          :ui="{
            rounded: 'rounded-none rounded-s-md',
          }"
        />
        <UInput
          type="text"
          size="md"
          placeholder=""
          v-model="product.count"
          class="border border-l-0 border-r-0 ring-0 text-black"
          :ui="{
            base: 'text-center',
            rounded: 'rounded-none',
            color: {
              white: {
                outline: 'ring-0',
              },
            },
          }"
        />
        <UButton
          @click="increaseCartItem(product.id)"
          label="+"
          color="gray"
          class="border"
          :ui="{
            rounded: 'rounded-none rounded-e-md',
          }"
        />
      </div>
    </div>
    
      
  </div>
</template>
<script setup>
const store = useCartStore();
const { products } = storeToRefs(store);
// console.log(products, "asdfasd")
</script>
