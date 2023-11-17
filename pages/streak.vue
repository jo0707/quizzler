<template>
    <div class="w-full">
        <Transition name="fade" mode="out-in">
            <QuestionLoading v-if="data.status == 'loading'" />
            <QuestionError v-else-if="data.status == 'error'" :data="data" />

            <CorrectAnimation v-else-if="showCorrect == true" />
            <IncorrectAnimation v-else-if="showCorrect == false" />

            <UCard v-else clas="dark:bg-transparent backdrop-blur-sm">
                <template #header>
                    <UBadge :label="`${currentIndex + 1}`" />
                </template>

                <TheQuestion :question="data.questions[currentIndex]" @answer="(correct: boolean) => onAnswer(correct)" />
            </UCard>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { useQuestionStore } from '~/store/question';

const questionStore = useQuestionStore()
const { data, currentIndex } = storeToRefs(questionStore)
const showCorrect = ref<boolean | null>(null)

questionStore.resetState()

onMounted(() => {
    questionStore.fetchQuestions(100)
})

watch(showCorrect, (newValue, _) => {
    if (newValue != null) {
        setTimeout(() => {
            showCorrect.value = null
            if (newValue == false) {
                navigateTo('/streakscore')
            }
        }, 1500)
    }
})

watch(currentIndex, (newValue, _) => {
    if (data.value.questions.length - newValue <= 3) {
        questionStore.appendQuestions(100)
    }
})

function onAnswer(isCorrect: boolean) {
    showCorrect.value = isCorrect
    questionStore.nextQuestion(isCorrect)
}
</script>