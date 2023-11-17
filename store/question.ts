import type { QuestionResponse } from "~/types/QuestionResponse"
import { successWrapper, errorWrapper, loadingWrapper } from "~/types/QuestionWrapper"
import { categories } from "~/values"

export const useQuestionStore = defineStore("question", () => {
  const count = ref(10)
  const category = ref(categories[0])
  const data = ref(loadingWrapper())

  const currentIndex = ref(0)
  const correctCount = ref(0)

  function resetState() {
    data.value = loadingWrapper()
    //count.value = 10
    correctCount.value = 0
    currentIndex.value = 0
  }

  async function fetchQuestions(amount: number = 10) {
    try {
      resetState()

      count.value = amount
      const questionResponse = await $fetch<QuestionResponse>(`https://opentdb.com/api.php`, {
        params: {
          amount: count.value,
          category: category.value.value,
        },
      })

      data.value = successWrapper(questionResponse.results)
    } catch (error) {
      console.log(error)
      data.value = errorWrapper(error.message || "Unknown error")
    }
  }

  async function appendQuestions(amount: number = 10) {
    try {
      const questionResponse = await $fetch<QuestionResponse>(`https://opentdb.com/api.php`, {
        params: {
          amount: amount,
          category: category.value.value,
        },
      })

      data.value = successWrapper([...data.value.questions, ...questionResponse.results])
    } catch (error) {
      console.log(error)
    }
  }

  function nextQuestion(isCurrentCorrect: boolean) {
    if (isCurrentCorrect) {
      correctCount.value++
    }

    currentIndex.value++
  }

  return {
    category,
    data,
    count,
    currentIndex,
    fetchQuestions,
    appendQuestions,
    nextQuestion,
    correctCount,
    resetState,
  }
})
