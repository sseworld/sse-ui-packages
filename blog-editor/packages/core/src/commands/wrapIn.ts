import { wrapIn as originalWrapIn } from '@sseui/pm/commands'
import { NodeType } from '@sseui/pm/model'

import { getNodeType } from '../helpers/getNodeType.js'
import { RawCommands } from '../types.js'

declare module '@sseui/core' {
  interface Commands<ReturnType> {
    wrapIn: {
      /**
       * Wraps nodes in another node.
       */
      wrapIn: (typeOrName: string | NodeType, attributes?: Record<string, any>) => ReturnType
    }
  }
}

export const wrapIn: RawCommands['wrapIn'] = (typeOrName, attributes = {}) => ({ state, dispatch }) => {
  const type = getNodeType(typeOrName, state.schema)

  return originalWrapIn(type, attributes)(state, dispatch)
}
