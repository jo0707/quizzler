<template>
    <div>
        <form @submit.prevent="setLeaderboard" class="flex flex-col gap-2">
            <UInput v-model="name" placeholder="Name..." maxlength="32" />
            <UButton label="Add to leaderboard" icon="i-heroicons-star-solid" block color="blue" type="submit" />
        </form>
    </div>
</template>

<script setup lang="ts">
import type { GameMode } from '~/types/Game';

const props = defineProps<{
    score: number,
    time: number,
    mode: GameMode
}>()
const supabase = useSupabase()
const toast = useCustomToast()
const name = ref('')

async function setLeaderboard() {
    try {
        name.value = name.value.replaceAll(/[</>]/g, '').trim()

        await supabase.setLeaderboard(name.value, props.score, props.time, props.mode)
        toast.success('Leaderboard added!')
        navigateTo('/leaderboard')
    } catch (error) {
        toast.error('Failed to add leaderboard!', "sorry, hehe :)")
    }
}
</script>