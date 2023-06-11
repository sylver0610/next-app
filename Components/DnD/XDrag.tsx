import dynamic from "next/dynamic"
import React, { FC, ReactNode } from "react"
import {
  //  Draggable,
  DraggableProps,
} from "react-beautiful-dnd"
const Draggable = dynamic(
  () =>
    import("react-beautiful-dnd").then((mod) => {
      return mod.Draggable
    }),
  { ssr: false }
)
interface IXDrag extends Omit<DraggableProps, "children"> {
  className?: string
  children: ReactNode
  dragAll?: boolean
}

const XDrag: FC<IXDrag> = ({ className, children, dragAll, ...props }) => {
  //   console.log(React.isValidElement(children))
  if (!React.isValidElement(children)) return <div />
  return (
    <Draggable {...props}>
      {(provided) => {
        const dragHandleProps = dragAll ? provided.dragHandleProps : {}
        return (
          <div
            className={className}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...dragHandleProps}
          >
            {React.cloneElement(children, { provided })}
          </div>
        )
      }}
    </Draggable>
  )
}

XDrag.defaultProps = {
  dragAll: true,
}

export default XDrag
