import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Game from './components/Game'
import questions from './components/questions'
import { Side } from './components'

type Question = {
  id: number
  name: string
  height: number
  image: HTMLImageElement
}

function App() {
  const [isCorrect, setIsCorrect] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState<Question>(questions[0])

  function checkAnswer(answer: number) {
    if (currentQuestion.height === Math.floor(198 * answer)) {
      setIsCorrect(true)
    }
    setCurrentQuestion(questions[1])
  }

  return (
    <div style={{ flexDirection: 'row', display: 'flex' }}>
      <div className="container">
        <Header currentName={currentQuestion.name} />
        <Game
          onAnswer={answer => checkAnswer(answer)}
          currentImage={currentQuestion.image}
        />
        {isCorrect && <div>tou are correct</div>}
      </div>
    </div>
  )
}

export default App
