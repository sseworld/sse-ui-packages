import { NodeType } from '@sseui/pm/model'
import { sinkListItem as originalSinkListItem } from '@sseui/pm/schema-list'

import { getNodeType } from '../helpers/getNodeType.js'
import { RawCommands } from '../types.js'

declare module '@sseui/core' {
  interface Commands<ReturnType> {
    sinkListItem: {
      /**
       * Sink the list item down into an inner list.
       */
      sinkListItem: (typeOrName: string | NodeType) => ReturnType
    }
  }
}

export const sinkListItem: RawCommands['sinkListItem'] = typeOrName => ({ state, dispatch }) => {
  const type = getNodeType(typeOrName, state.schema)

  return originalSinkListItem(type)(state, dispatch)
}
