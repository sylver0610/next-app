import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import woldList from '../word.json'
let randomNum = Math.floor(Math.random() * woldList.words.length)
// Define a type for the slice state
interface BoardState {
  board: string[]
  index: number
  isBlocked: boolean
  row: number
  word: string
  show: boolean
}

// Define the initial state using that type
const initialState: BoardState = {
  board: [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ],
  index: 0,
  isBlocked: false,
  row: 0,
  show: false,
  word: woldList.words[randomNum],
}
export const boardSlice = createSlice({
  name: 'board',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    chooseLetter: (state, action: PayloadAction<string>) => {
      if (state.index < 30 && !state.isBlocked) {
        state.board[state.index] = action.payload
        state.index += 1
        state.show = false
      }
    },
    deleteLetter: (state) => {
      if (state.index > state.row * 5 && state.index <= (state.row + 1) * 5) {
        state.board[state.index - 1] = ''
        state.index -= 1
        state.isBlocked = false
      }
    },
    setBlock: (state) => {
      state.isBlocked = true
    },
    unBlock: (state) => {
      state.isBlocked = false
      state.show = true
    },
    incRow: (state) => {
      if (state.row < 6) state.row += 1
    },
  },
})

export const { chooseLetter, deleteLetter, setBlock, unBlock, incRow } = boardSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectBoard = (state: RootState) => state.board.board
export const selectIndex = (state: RootState) => state.board.index
export const selectRow = (state: RootState) => state.board.row
export const selectWord = (state: RootState) => state.board.word
export const selectBlock = (state: RootState) => state.board.isBlocked
export const selectShow = (state: RootState) => state.board.show
export default boardSlice.reducer
