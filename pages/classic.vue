<template>
    <div class="w-full">
        <Transition name="fade" mode="out-in">
            <QuestionLoading v-if="data.status == 'loading'" />
            <QuestionError v-else-if="data.status == 'error'" :data="data" />

            <CorrectAnimation v-else-if="showCorrect == true" />
            <IncorrectAnimation v-else-if="showCorrect == false" />

            <UCard v-else class="dark:bg-transparent backdrop-blur-sm">
                <template #header>
                    <UBadge :label="`${currentIndex + 1} / ${count}`" />
                </template>

                <TheQuestion :question="data.questions[currentIndex]" @answer="(correct: boolean) => onAnswer(correct)" />
            </UCard>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { useQuestionStore } from '~/store/question';

const questionStore = useQuestionStore()
const { data, currentIndex, count } = storeToRefs(questionStore)
const showCorrect = ref<boolean | null>(null)

questionStore.resetState()

onMounted(() => {
    questionStore.fetchQuestions()
})

watch(showCorrect, (newValue, _) => {
    if (newValue != null) {
        setTimeout(() => {
            showCorrect.value = null
            if (currentIndex.value == count.value) {
                navigateTo('/score')
            }
        }, 2000)
    }
})

function onAnswer(isCorrect: boolean) {
    showCorrect.value = isCorrect
    questionStore.nextQuestion(isCorrect)
}
</script>