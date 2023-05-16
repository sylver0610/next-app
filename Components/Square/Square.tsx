// 'use client'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/Square.module.scss'
import { motion } from 'framer-motion'
import { useAppDispatch, useAppSelector } from '@component/Redux/hook'
import {
  selectBlock,
  selectIndex,
  selectRow,
  selectShow,
  selectWord,
} from '@component/Redux/boardSlice'
interface IProps {
  value: string
  idxSquare: number
}
const Square: React.FC<IProps> = (props) => {
  const { value, idxSquare } = props

  const correctWord = useAppSelector(selectWord)
  const position = useAppSelector(selectIndex)
  const row = useAppSelector(selectRow)
  const isBlock = useAppSelector(selectBlock)
  const dispatch = useAppDispatch()

  const [correct, setCorrect] = useState<boolean>(false)
  const [almost, setAlmost] = useState<boolean>(false)
  const [wrong, setWrong] = useState<boolean>(false)

  const lastWordIndex = 4
  const firstWordIndex = (row - 1) * 5
  const currentPos = position - 1 - row * 5

  useEffect(() => {
    // console.log(`test `, correctWord[currentPos], ' - ', value)
    // console.log(`test `, correctWord[currentPos], ' - ', currentPos)
    if (correctWord[currentPos] === value.toLocaleLowerCase()) {
      // console.log(`right `, correctWord[currentPos])
      setCorrect(true)
    } else if (!correct && value && correctWord.includes(value.toLocaleLowerCase())) {
      setAlmost(true)
    } else if (!correct && value && !correctWord.includes(value.toLocaleLowerCase())) {
      setWrong(true)
    }
    return () => {
      setCorrect(false)
      setAlmost(false)
      setWrong(false)
    }
  }, [value])

  // const idStatus: string | boolean = correct ? 'correct' : almost ? 'almost' : wrong ? 'wrong' : ''
  const status = () => {
    // console.log(Math.floor(idxSquare / 5), ' - ', idxSquare / 5, ' - row', row)
    // console.log(`idx: `, idxSquare)
    if (Math.floor(idxSquare / 5) < row) {
      if (correct) return styles.correct
      if (almost) return styles.almost
      if (wrong) return styles.wrong
    }
  }
  const variants = {
    filled: () => ({
      scale: [1.2, 1],
      transition: {
        duration: 0.2,
      },
    }),
    unfilled: () => ({
      scale: [1.2, 1],
      transition: {
        duration: 0.2,
      },
    }),
  }

  return (
    <motion.div animate={value ? 'filled' : 'unfilled'} variants={variants}>
      <div
        className={`${styles.square} ${status()}`}
        // onClick={() => console.log((row - 1) * 5 + 5, ' - ', position)}
      >
        {value}
      </div>
    </motion.div>
  )
}

export default Square
