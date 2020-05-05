import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import '../App.css'
import Header from '../components/Header'
import Game from '../components/Game'
import questions from '../components/questions'
import { superStore } from '../store'
import { AnimatePresence, motion } from 'framer-motion'

type Question = {
  id: number
  name: string
  height: number
  image: HTMLImageElement
}

function Main() {
  const { questionId } = useParams()
  const [isCorrect, setIsCorrect] = useState(false)
  const [isWrong, setIsWrong] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState<Question>(questions[0])
  const [currentAnswer, setCurrentAnswer] = useState(1)

  useEffect(() => {
    setCurrentQuestion(questions[questionId || 0])
  }, [questionId])

  const history = useHistory()

  function checkAnswer() {
    setIsCorrect(false)
    const answer = Math.floor(198 * superStore.currentAnswer)

    if (currentQuestion.height === (answer || answer - 1 || answer + 1)) {
      setIsCorrect(true)
      setTimeout(() => {
        setCurrentQuestion(questions[superStore.currentIndex])
        superStore.currentIndex++
        superStore.correctAnswers++
        superStore.completedQuestions++
        superStore.currentAnswer = 1
        history.push(`/main/${superStore.currentIndex}`)
        setIsCorrect(false)
      }, 1500)
    } else {
      setIsWrong(true)
      setTimeout(() => {
        setIsWrong(false)
      }, 1500)
    }
  }

  return (
    <div style={{ flexDirection: 'row', display: 'flex' }}>
      <div className="container">
        <Header currentName={currentQuestion.name} />
        <Game
          onAnswer={() => checkAnswer()}
          currentImage={currentQuestion.image}
        />
        <AnimatePresence exitBeforeEnter>
          {isWrong && (
            <motion.div
              className="result"
              initial={{
                translateY: window.innerHeight,
                scale: 0,
                transformOrigin: 'center',
              }}
              animate={{ translateY: 0, scale: 1, transformOrigin: 'center' }}
              exit={{
                translateY: window.innerHeight,
                scale: 0,
                transformOrigin: 'center',
              }}>
              you are definitely not right dude
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence exitBeforeEnter>
          {isCorrect && (
            <motion.div
              className="result"
              style={{ alignItems: 'center' }}
              initial={{
                translateY: window.innerHeight,
                scale: 0,
                transformOrigin: 'center',
              }}
              animate={{ translateY: 0, scale: 1, transformOrigin: 'center' }}
              exit={{
                translateY: window.innerHeight,
                scale: 0,
                transformOrigin: 'center',
              }}>
              That is right yo
            </motion.div>
          )}
        </AnimatePresence>
        {superStore.correctAnswers}/{superStore.completedQuestions}
      </div>
    </div>
  )
}

export default Main
