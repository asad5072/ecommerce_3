<template>
    <div class="bg-purple-200 py-2">
        <UContainer>
            <div class="flex items-center justify-between gap-4">
                <nuxt-link to="/" class="text-xl font-bold w-max bg-black text-white px-4 py-1 rounded-md">logo</nuxt-link>
                <ul class="flex items-center gap-4">
                    <li class="hover:bg-purple-300 px-4 py-1 rounded hover:text-white transition-color delay-150"><nuxt-link to="/">Home</nuxt-link></li>
                    <li class="hover:bg-purple-300 px-4 py-1 rounded hover:text-white transition-color delay-150"><nuxt-link to="/cart">Cart</nuxt-link></li>
                    <li class="hover:bg-purple-300 px-4 py-1 rounded hover:text-white transition-color delay-150"><nuxt-link to="#">Contact</nuxt-link></li>
                    <div class="relative">
                        <nuxt-link to="#">
                            <UIcon name="i-heroicons-shopping-bag" class="w-5 h-5 text-purple-500" />
                            <p class="absolute -top-4 right-0 text-purple-800">13</p>
                        </nuxt-link>

                    </div>
                </ul>
            </div>

        </UContainer>
    </div>
</template>

<script>

    
</script>

<style lang="scss" scoped>

</style>