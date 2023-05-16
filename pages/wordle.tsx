import Board from '@component/Components/Board/Board'
import { Heading } from '@component/Components/Heading/Heading'
import { selectBoard } from '@component/Redux/boardSlice'
import { useAppSelector } from '@component/Redux/hook'
import Head from 'next/head'
import * as React from 'react'

export interface IWordleProps {}

export default function Wordle(props: IWordleProps) {
  const board = useAppSelector(selectBoard)
  return (
    <div>
      <Head>
        <title>Wordle</title>
      </Head>
      <Heading type="h1" title="Wordle" />
      <div className="board-container flex-wrap flex-col flex items-center justify-center mt-6">
        <Board board={board} />
      </div>
    </div>
  )
}
