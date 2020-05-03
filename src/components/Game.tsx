import React, { useState } from 'react'
import useDimensions from 'react-use-dimensions'
import { AnimatePresence, motion } from 'framer-motion'
import michael from '../images/michael.png'
import Measurer from './Measurer'
import '../App.css'
import { Button, H1, H2 } from '.'

type Props = {
  onAnswer: (a: number) => void
  currentImage: HTMLImageElement
}

function Game({ onAnswer, currentImage }: Props) {
  const [currentAnswer, setCurrentAnswer] = useState<number>(1)
  const [ref, { height }] = useDimensions()

  return (
    <div className="measurer-body" ref={ref}>
      <div className="left">
        <div className="images">
          <img
            src={michael}
            alt="oh look it's michael"
            object-fit="contain"
            style={{
              maxHeight: height,
              alignItems: 'flex-end',
              paddingRight: '4rem',
            }}
          />
          <AnimatePresence>
            <motion.div
              key={`${currentImage}`}
              className="current-question"
              transition={{ duration: 0.5 }}
              initial={{ scaleY: 0, transformOrigin: 'bottom' }}
              animate={{ scaleY: 1, transformOrigin: 'bottom' }}
              exit={{ scaleY: 0, transformOrigin: 'bottom' }}>
              <img
                src={`${currentImage}`}
                alt="question"
                object-fit="contain"
                style={{
                  height: (height || 500) * currentAnswer,
                  position: 'absolute',
                  bottom: 0,
                }}
              />
            </motion.div>
          </AnimatePresence>
          <Measurer
            setCurrentAnswer={answer => setCurrentAnswer(answer)}
            height={height || 500}
          />
        </div>
      </div>
      <div className="right">
        <H1>{currentAnswer.toFixed(2)} michaeljordans</H1>
        <Button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => onAnswer(currentAnswer)}>
          That's it
        </Button>
        <AnimatePresence>
          {currentAnswer < 0 && (
            <H2
              initial={{ scale: 0, transformOrigin: 0 }}
              animate={{ scale: 1, transformOrigin: 0 }}
              exit={{ scale: 0, transformOrigin: 0 }}>
              What, there are no Michael Jordans?
            </H2>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
export default Game
