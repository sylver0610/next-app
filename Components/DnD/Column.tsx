import { FC } from "react"
import XDrag from "./XDrag"
import { IColumn, ITask } from "@component/pages/dnd/data"
import { DraggableProvided } from "react-beautiful-dnd"
import XDrop from "./XDrop"
import styled from "styled-components"

interface IXColumn {
  className?: string
  column: IColumn
  tasks: ITask[]
  provided?: DraggableProvided
}

const CSS = styled.div`
  width: 70vw;
  margin-bot: 0.5rem;
  //   min-height: 50vw;
  border: 1px solid lightgray;
  background-color: #fff;
  margin-right: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .task-drop {
    padding: 5px;
  }
  .card {
    width: 27vw;
    border: 1px solid lightgray;
    margin-bottom: 0.5em;
    background-color: #fff;
  }
`

const XColumn: FC<IXColumn> = ({ column, tasks, provided }) => {
  return (
    <CSS>
      <h3 {...provided?.dragHandleProps}>{column.title}</h3>
      <XDrop droppableId={column.id} type="TASK" className="task-drop">
        {tasks.map((task, index) => (
          <XDrag draggableId={task.id} index={index} key={task.id}>
            <div className="card">{task.id}</div>
          </XDrag>
        ))}
      </XDrop>
    </CSS>
  )
}

export default XColumn
