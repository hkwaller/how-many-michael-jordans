import { store } from '@risingstack/react-easy-state'
import questions from './components/questions'

export const superStore = store({
  questions: questions,
  correctAnswers: 0,
  completedQuestions: 0,
  currentIndex: 0,
  currentAnswer: 1,
})
