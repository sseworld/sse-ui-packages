import { MarkType } from '@sseui/pm/model'
import { TextSelection } from '@sseui/pm/state'

import { getMarkRange } from '../helpers/getMarkRange.js'
import { getMarkType } from '../helpers/getMarkType.js'
import { RawCommands } from '../types.js'

declare module '@sseui/core' {
  interface Commands<ReturnType> {
    extendMarkRange: {
      /**
       * Extends the text selection to the current mark.
       */
      extendMarkRange: (
        typeOrName: string | MarkType,
        attributes?: Record<string, any>,
      ) => ReturnType
    }
  }
}

export const extendMarkRange: RawCommands['extendMarkRange'] = (typeOrName, attributes = {}) => ({ tr, state, dispatch }) => {
  const type = getMarkType(typeOrName, state.schema)
  const { doc, selection } = tr
  const { $from, from, to } = selection

  if (dispatch) {
    const range = getMarkRange($from, type, attributes)

    if (range && range.from <= from && range.to >= to) {
      const newSelection = TextSelection.create(doc, range.from, range.to)

      tr.setSelection(newSelection)
    }
  }

  return true
}
