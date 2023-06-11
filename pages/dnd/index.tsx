// "use client"
import { Variant } from "@component/Libs/type"
import dynamic from "next/dynamic"
const Column = dynamic(() => import("../../Components/Column/Column"), { ssr: false })
// const Column1 = dynamic(() => import("../../Components/Column/Column1"), { ssr: false })
import React, { useEffect, useState } from "react"
const DragDropContext = dynamic(
  () =>
    import("react-beautiful-dnd").then((mod) => {
      return mod.DragDropContext
    }),
  { ssr: false }
)
// import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd"
import { initialData } from "./data"
const XColumn = dynamic(() => import("../../Components/DnD/Column"), { ssr: false })
// import XColumn from "@component/Components/DnD/Column"
import XDrag from "@component/Components/DnD/XDrag"
import XDrop from "@component/Components/DnD/XDrop"
import styled from "styled-components"
import { addTask, deleteTask, onChange } from "./utils"
import { DropResult } from "react-beautiful-dnd"

const CSS = styled.div`
  .column-content {
    display: flex;
  }
`

export default function dnd() {
  const [data, setData] = useState(initialData)
  useEffect(() => {
    setData(initialData)
  }, [])
  const onDragEnd = (res: DropResult) => {
    const { source, destination, draggableId } = res
    if (!destination) return
    if (onChange(source, destination)) return
    if (res.type === "TASK") {
      let newData = deleteTask(data, source)
      newData = addTask(newData, destination, draggableId)
      setData(newData)
    }
    if (res.type === "COLUMN") {
      let columnOrder = [...data.columnOrder]
      columnOrder.splice(source.index, 1)
      columnOrder.splice(destination.index, 0, draggableId)
      data.columnOrder = columnOrder
      setData({ ...data })
    }
  }
  return (
    <div className="flex">
      <DragDropContext onDragEnd={onDragEnd}>
        <XDrop
          className="column-content flex flex-col "
          droppableId="all-columns"
          type="COLUMN"
          direction="vertical"
        >
          {data.columnOrder.map((columnId, index) => {
            const column = data.columns[columnId]
            const tasks = column.taskIds.map((taskId) => data.tasks[taskId])
            return (
              <XDrag key={columnId} draggableId={columnId} index={index} dragAll={false}>
                {data ? <XColumn column={column} tasks={tasks} /> : null}
                {/* <XColumn column={column} tasks={tasks} /> */}
              </XDrag>
            )
          })}
        </XDrop>
      </DragDropContext>
    </div>
  )
}
