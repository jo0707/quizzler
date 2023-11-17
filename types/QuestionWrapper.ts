import { type Question } from "./QuestionResponse"

export interface QuestionWrapper {
  status: "success" | "error" | "loading"
  error?: string
  questions: Question[]
}

export const successWrapper = (questions: Question[]) => {
  return {
    status: "success",
    error: undefined,
    questions: questions,
  } as QuestionWrapper
}

export const errorWrapper = (msg: string) => {
  return {
    status: "error",
    error: msg,
    questions: Array<Question>(),
  } as QuestionWrapper
}

export const loadingWrapper = () => {
  return {
    status: "loading",
    error: undefined,
    questions: [],
  } as QuestionWrapper
}
