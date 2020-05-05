import React, { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import { view } from '@risingstack/react-easy-state'
import { superStore } from '../store'

type Props = {
  height: number
}

function Measurer({ height }: Props) {
  const [color, setColor] = useState('#000')
  const lines = height / 20
  const constraintsRef = useRef(null)

  const [y, setY] = useState(0)
  const x = useMotionValue(0)

  return (
    <div className="svg-container" ref={constraintsRef}>
      <svg
        version="1.1"
        height={height}
        style={{ overflow: 'visible' }}
        width={100}
        viewBox={`0 0 80 ${height}`}
        preserveAspectRatio="xMinYMin meet"
        className="svg-content">
        <path d={`M80 ${height}L80 0`} stroke="#000000" strokeWidth="8" />
        {Array.from({ length: 20 }, (_, i) => {
          if (i === 0) return []
          const m = Math.floor(i * lines)
          const width = i % 10 === 0 ? 80 : 50
          const start = i % 10 === 0 ? 40 : 80
          const strokeWidth = i % 10 === 0 ? 8 : 4

          return (
            <path
              key={i}
              d={`M${start} ${m}L${width} ${m}`}
              stroke="#000000"
              strokeWidth={strokeWidth}
            />
          )
        })}
        <motion.path
          drag="y"
          whileTap={{ scale: 1.5, x: -16 }}
          dragConstraints={constraintsRef}
          className="handle"
          style={{ top: y }}
          onDrag={(_, info) => {
            setY(info.point.y > 0 ? info.point.y : 0)
            superStore.currentAnswer = (height - y) / height
            setColor('#fc6d68')
          }}
          onDragEnd={(_, info) => {
            setY(info.point.y > 0 ? info.point.y : 0)
            superStore.currentAnswer = (height - y) / height
            setColor('#000')
          }}
          d="M20 4L84 4"
          stroke={color}
          strokeWidth="8"
        />
        <path
          d={`M40 ${height}L84 ${height}`}
          stroke="#000000"
          strokeWidth="8"
        />
      </svg>
    </div>
  )
}

export default view(Measurer)
