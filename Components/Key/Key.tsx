import { useAppDispatch, useAppSelector } from '@component/Redux/hook'
import { chooseLetter, selectIndex, selectRow, setBlock } from '@component/Redux/boardSlice'
import _ from 'lodash'
import React from 'react'
interface IProps {
  val: string
}
const Key: React.FC<IProps> = (props) => {
  const { val } = props
  const position = useAppSelector(selectIndex)
  const row = useAppSelector(selectRow)
  const dispatch = useAppDispatch()
  const setLetter = () => {
    if (Math.floor(position / 5) === row + 1 && position !== 0) {
      console.log(`is blocked`)
      dispatch(setBlock())
    } else dispatch(chooseLetter(val))
  }
  return (
    <div
      className="flex justify-center m-1 rounded p-3 cursor-pointer border-solid border border-black font-semibold w-[26px]"
      onClick={setLetter}
    >
      {val}
    </div>
  )
}

export default Key
