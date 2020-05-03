import styled from 'styled-components'
import { motion } from 'framer-motion'

export const H1 = styled.h1`
  font-size: 30px;
  line-height: 0px;
`

export const H2 = styled(motion.h2)`
  font-size: 18 px;
`

export const Question = styled(motion.span)`
  font-size: 65px;
  color: #010369;
`

export const Button = styled(motion.button)`
  background-color: #0405b2;
  padding: 1rem 2rem;
  font-size: 40px;
  border: none;
  display: inline-block;
  width: fit-content;
  color: #fff;
  margin-top: 2rem;
  border-radius: 10px;

  :focus {
    outline: none;
  }
`

export const Side = styled(motion.span)`
  font-size: 9vh;
  transform: rotate(90deg);
  transition: color 0.2s ease-in;

  :hover {
    color: #0405b2;
  }
`
