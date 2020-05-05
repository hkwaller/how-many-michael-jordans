import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { Button } from '../components'
import './intro.css'

const spring = {
  type: 'spring',
  damping: 15,
  stiffness: 100,
}

function Intro() {
  return (
    <div className="intro-container">
      <motion.span
        transition={spring}
        initial={{ translateX: window.innerWidth }}
        animate={{ translateX: 0 }}
        exit={{ translateX: -window.innerWidth }}>
        The revolutionary
      </motion.span>
      <motion.span
        style={{ fontSize: '50px' }}
        transition={{ ...spring, delay: 0.3 }}
        initial={{ translateX: window.innerWidth }}
        animate={{ translateX: 0 }}
        exit={{ translateX: -window.innerWidth }}>
        How many Michael Jordans
      </motion.span>
      <Link to="/main">
        <Button
          transition={{ ...spring, delay: 0.6 }}
          initial={{ translateX: window.innerWidth }}
          animate={{ translateX: 0 }}
          exit={{ translateX: -window.innerWidth }}>
          Start Playing
        </Button>
      </Link>
      <AnimateSharedLayout>
        <motion.img
          layoutId="michael"
          className="image"
          transition={{ delay: 2 }}
          initial={{ translateY: window.innerHeight }}
          animate={{ translateY: 0 }}
          exit={{ translateY: -window.innerHeight }}
          src={require('../images/michael.png')}
          alt="michael yo"
        />
      </AnimateSharedLayout>
    </div>
  )
}

export default Intro
