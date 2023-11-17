<template>
    <div>
        <p v-html="question.question"></p>
        <div class="flex flex-col gap-2 mt-4">
            <UButton v-for="answer in getAnswers()" v-html="answer" variant="soft" @click="submitAnswer(answer)" block />
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Question } from '~/types/QuestionResponse';

const props = defineProps<{
    question: Question
}>()
const emits = defineEmits(['answer'])

function getAnswers() {
    return [props.question.correct_answer, ...props.question.incorrect_answers].sort(() => Math.random() - 0.5)
}

function submitAnswer(answer: string) {
    emits('answer', answer == props.question.correct_answer)
}
</script>

