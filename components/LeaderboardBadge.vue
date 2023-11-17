<template>
    <div class="grid place-content-center">
        <div v-if="index == 0" class="grid place-items-center">
            <UIcon name="i-heroicons-trophy-solid" class="absolute dark:text-yellow-500/50 animate-ping" />
            <UIcon name="i-heroicons-trophy-solid" class="dark:text-yellow-500" />
        </div>
        <UIcon v-else-if="index == 1" name="i-heroicons-star-solid" class="dark:text-yellow-500" />
        <UIcon v-else-if="index == 2" name="i-heroicons-star-solid" class="dark:text-yellow-500" />
        <UIcon v-else name="i-heroicons-user-circle-solid" class="dark:text-primary-500" />
    </div>
</template>

<script setup lang="ts">
defineProps<{
    index: number
}>()
</script>