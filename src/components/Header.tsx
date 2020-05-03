import React from 'react'
import { H1, H2, Question } from './'

type Props = {
  currentName: string
}

function Header({ currentName }: Props) {
  return (
    <div className="header">
      <div>
        <H2>How many</H2>
        <H1>Michael</H1>
        <H2>Jordans are</H2>
      </div>
      <div className="header-dot" />
      <Question
        key={currentName}
        initial={{ x: 1300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}>
        {currentName}
      </Question>
    </div>
  )
}

export default Header
