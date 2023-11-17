<template>
    <div class="flex flex-col gap-2">
        <h1 class="text-xl">Quiz Finished!</h1>

        <UCard>
            <div class="flex flex-col place-items-center">
                <UIcon name="i-heroicons-fire-solid" class="bg-orange-400 w-14 h-14" />
                <p>Score : {{ questionStore.correctCount }}</p>
            </div>
        </UCard>

        <UDivider />
        <LeaderboardForm :score="questionStore.correctCount" :time="0" mode="streak" />
        <UDivider />

        <div class="flex flex-col gap-2">
            <UButton label="Play Again" icon="i-heroicons-fire-solid" color="orange" block to="/streak" />
            <UButton label="Back to menu" icon="i-heroicons-home-solid" block to="/" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useQuestionStore } from '~/store/question';

const questionStore = useQuestionStore()

</script>