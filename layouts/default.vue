<template>
    <div>
        <header class="flex place-content-between backdrop-blur-sm fixed top-0 left-0 w-screen z-10 py-4 px-8 border-b dark:border-gray-600">
            <NuxtLink to="/">
                <TheLogo class="text-xl" />
            </NuxtLink>
            <NuxtLink to="/" class="hover:underline hover:dark:text-gray-300 transition">
                Home
            </NuxtLink>
        </header>

        <main class="px-4 w-screen h-screen text-center grid place-content-center">
            <slot></slot>
        </main>
    </div>
</template>

<script setup lang="ts">

</script>