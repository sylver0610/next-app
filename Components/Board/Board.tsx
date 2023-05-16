import React from 'react'
import Square from '../Square/Square'
import styles from '../../styles/Board.module.scss'
import KeyBoard from '../KeyBoard/KeyBoard'
interface IProps {
  board: string[]
}
const Board: React.FC<IProps> = (props) => {
  const { board } = props
  return (
    <>
      <div className={styles.board}>
        {board.map((square, index) => {
          return <Square key={index} value={square} idxSquare={index} />
        })}
      </div>
      <div className="keyboard">
        <KeyBoard />
      </div>
    </>
  )
}

export default Board
