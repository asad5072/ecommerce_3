<template>
    <div>
        <div class="flex items-center justify-between gap-8 py-12">
            <p>Title: Product Title</p>

        </div>
    </div>
</template>
<script setup>
    const {id} = useRoute().params
    console.log(id, 'asad')
</script>