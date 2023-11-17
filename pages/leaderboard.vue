<template>
    <div class="flex flex-col gap-2 sm:w-96">
        <h1 class="text-xl font-bold">Leaderboard</h1>

        <UTabs class="w-full" :items="tabs" @change="onTabChange" />

        <div v-if="isLoading" class="flex flex-col place-content-center">
            <p>Loading...</p>
            <UProgress />
        </div>
        <TransitionGroup name="list" tag="ul" class="flex flex-col gap-2 overflow-y-auto">
            <LeaderboardItem v-for="(data, index) in leaderboard" :data="data" :index="index" />
        </TransitionGroup>
    </div>
</template>

<script setup lang="ts">
import type { GameMode } from '~/types/Game';

const tabs = [{
    label: 'Streak',
}, {
    label: 'Classic',
}]

const supabase = useSupabase()
const toast = useCustomToast()
const leaderboard = ref<Awaited<ReturnType<typeof supabase.getLeaderboard>>>([])
const isLoading = ref(true)

onMounted(async () => {
    getLeaderboard('streak')
})

function onTabChange(index: number) {
    if (index === 0) {
        getLeaderboard('streak')
    } else if (index === 1) {
        getLeaderboard('classic')
    }
}

async function getLeaderboard(mode: GameMode) {
    try {
        leaderboard.value = await supabase.getLeaderboard(mode)
        isLoading.value = false
    } catch (error) {
        toast.error('Failed to get leaderboard!', "sorry, hehe :)")
    }
}
</script>
<style>
.list-enter-active,
.list-leave-active {
    transition: all 0.4s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    scale: 0.8;
}
</style>