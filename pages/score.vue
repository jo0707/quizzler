<template>
    <div class="flex flex-col gap-2">
        <h1 class="text-xl">Quiz Finished!</h1>

        <UCard class="">
            <div class="flex gap-16">
                <div class="relative">
                    <UIcon name="i-heroicons-check-circle-solid" class="bg-green-400 w-14 h-14" />
                    <p>Correct : {{ questionStore.correctCount }}</p>
                </div>
                <div class="relative">
                    <UIcon name="i-heroicons-x-circle-solid" class="bg-red-400 w-14 h-14" />
                    <p>Incorrect : {{ questionStore.count - questionStore.correctCount }}</p>
                </div>
            </div>
        </UCard>
        <UDivider />
        <LeaderboardForm :score="questionStore.correctCount" :time="0" mode="classic" />
        <UDivider />
        <div class="flex flex-col gap-2">
            <UButton label="Play Again" icon="i-heroicons-arrow-path" block to="/classic" />
            <UButton label="Back to menu" icon="i-heroicons-home-solid" block to="/" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { useQuestionStore } from '~/store/question';

const questionStore = useQuestionStore()
</script>