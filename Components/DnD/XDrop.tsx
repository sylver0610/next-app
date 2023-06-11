import dynamic from "next/dynamic"
import { FC, ReactNode } from "react"
const Droppable = dynamic(
  () =>
    import("react-beautiful-dnd").then((mod) => {
      return mod.Droppable
    }),
  { ssr: false }
)
import {
  // Droppable    ,
  DroppableProps,
} from "react-beautiful-dnd"
import styled from "styled-components"
interface IXDrop extends Omit<DroppableProps, "children"> {
  children: ReactNode
  className?: string
}

const Content = styled.div<{ isDraggingOver: boolean }>`
  background-color: ${(props) => (props.isDraggingOver ? "#f7f7f7" : "#fff")};
`

const XDrop: FC<IXDrop> = ({ children, className, ...props }) => {
  return (
    <Droppable {...props}>
      {(provided, snapshot) => (
        <Content
          {...provided.innerRef}
          ref={provided.innerRef}
          className={className}
          isDraggingOver={snapshot.isDraggingOver}
        >
          {children}
          {provided.placeholder}
        </Content>
      )}
    </Droppable>
  )
}

export default XDrop
