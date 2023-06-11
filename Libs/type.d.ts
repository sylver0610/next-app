export interface Board {
  columns: Map<string, string>
}

type TypedColumn = "question" | "answer"

interface Column {
  id: TypedColumn
  variant: Variant[]
}

interface Variant {
  id: string
  title: string
  image: string
  status: TypedColumn
}

interface Image {
  fileId: string
}
