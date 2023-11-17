<template>
    <div class="flex gap-2 px-4 py-2 rounded shadow items-center transition hover:dark:bg-gray-700/50 dark:bg-gray-800/50 backdrop-blur-sm border"
        :class="index <= 2 ? 'dark:border-yellow-500' : 'dark:border-primary-500'">
        <LeaderboardBadge :index="index" />

        <p :class="{ 'dark:text-gray-500': !data.name }">{{ data.name || 'Anonymous player' }}</p>
        <div class="grow"></div>
        <p>{{ data.score }}</p>
    </div>
</template>

<script setup lang="ts">
import type { Database } from '~/types/Database';

const props = defineProps<{
    data: Database['public']['Tables']['leaderboard']['Row'],
    index: number
}>()
</script>