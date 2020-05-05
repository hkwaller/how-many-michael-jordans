import React from 'react'
import { H1, H2, Question } from './'
import { AnimatePresence } from 'framer-motion'

type Props = {
  currentName: string
}

function Header({ currentName }: Props) {
  return (
    <div className="header">
      <div className="header-left">
        <H2>How many</H2>
        <H1>Michael</H1>
        <H2>Jordans</H2>
      </div>
      <div className="header-dot" />
      <AnimatePresence exitBeforeEnter>
        <Question
          key={currentName}
          initial={{ x: 800, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -800, opacity: 0 }}>
          {currentName}
        </Question>
      </AnimatePresence>
    </div>
  )
}

export default Header
