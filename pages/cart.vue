<template>
    <div>
        {{products}}
        <p>Cart Page</p>
        <div v-for="product in products" :key="product.id">
            <p>Title: {{product.title}}</p>
        </div>
    </div>
</template>
<script setup>
    const store = useCartStore()
    const {products} = storeToRefs(store);
    // console.log(products, "asdfasd")
</script>