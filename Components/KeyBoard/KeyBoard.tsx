import React from 'react'
import Key from '../Key/Key'
import {
  chooseLetter,
  deleteLetter,
  incRow,
  selectIndex,
  selectWord,
  setBlock,
  unBlock,
} from '@component/Redux/boardSlice'
import { useAppDispatch, useAppSelector } from '@component/Redux/hook'
const KeyBoard: React.FC = () => {
  const rows: string[] = ['q w e r t y u i o p', 'a s d f g h j k l', 'z x c v b n m']
  const position = useAppSelector(selectIndex)
  const correctWord = useAppSelector(selectWord)
  const dispatch = useAppDispatch()
  const backAction = () => {
    dispatch(deleteLetter())
  }
  const pressEnter = () => {
    dispatch(unBlock())
    dispatch(incRow())
    console.log(`Enter unBlocked`)
    if (position === 30) {
      setTimeout(() => {
        alert(`Correct word: ${correctWord} `)
      }, 1000)
    }
  }
  return (
    <div className="keyboard-container">
      {rows.map((row, indexRow) => {
        return (
          <div className="flex gap-1 justify-center" key={indexRow}>
            {row.split(' ').map((key, index) => {
              return (
                <React.Fragment key={index}>
                  {key === 'z' && (
                    <span
                      className="m-2 rounded p-2 cursor-pointer border-solid border border-black font-semibold inline-block m-auto"
                      onClick={pressEnter}
                    >
                      Enter
                    </span>
                  )}
                  <Key val={key.toUpperCase()} />
                  {key === 'm' && (
                    <span
                      className="m-2 rounded p-2 cursor-pointer border-solid border border-black font-semibold inline-block m-auto"
                      onClick={backAction}
                    >
                      Back
                    </span>
                  )}
                </React.Fragment>
              )
            })}
          </div>
        )
      })}
    </div>
  )
}

export default KeyBoard
