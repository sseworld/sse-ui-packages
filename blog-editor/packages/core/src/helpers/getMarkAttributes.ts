import { Mark, MarkType } from '@sseui/pm/model'
import { EditorState } from '@sseui/pm/state'

import { getMarkType } from './getMarkType.js'

export function getMarkAttributes(
  state: EditorState,
  typeOrName: string | MarkType,
): Record<string, any> {
  const type = getMarkType(typeOrName, state.schema)
  const { from, to, empty } = state.selection
  const marks: Mark[] = []

  if (empty) {
    if (state.storedMarks) {
      marks.push(...state.storedMarks)
    }

    marks.push(...state.selection.$head.marks())
  } else {
    state.doc.nodesBetween(from, to, node => {
      marks.push(...node.marks)
    })
  }

  const mark = marks.find(markItem => markItem.type.name === type.name)

  if (!mark) {
    return {}
  }

  return { ...mark.attrs }
}
