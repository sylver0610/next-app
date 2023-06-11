import { isEmpty } from "lodash"
import React from "react"
import { Draggable } from "react-beautiful-dnd"
import { Droppable } from "react-beautiful-dnd"

interface props {
  tasks: any
  placeholderProps: any
}
const Column = ({ tasks, placeholderProps }: props) => {
  return (
    <Droppable droppableId="col">
      {(droppableProvided) => (
        <div
          {...droppableProvided.droppableProps}
          ref={droppableProvided.innerRef}
          className="flex flex-col"
        >
          {tasks.map((task: any, index: any) => (
            <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
              {(draggableProvided, draggableSnapshot) => (
                <div
                  {...draggableProvided.dragHandleProps}
                  {...draggableProvided.draggableProps}
                  ref={draggableProvided.innerRef}
                >
                  <div>{task.content}</div>
                </div>
              )}
            </Draggable>
          ))}
          {droppableProvided.placeholder}
          {!isEmpty(placeholderProps) && <div>GGWP</div>}
        </div>
      )}
    </Droppable>
  )
}

export default Column
