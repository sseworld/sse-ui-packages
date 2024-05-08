// @ts-ignore
// TODO: add types to @types/prosemirror-commands
import { selectTextblockEnd as originalSelectTextblockEnd } from '@sseui/pm/commands'

import { RawCommands } from '../types.js'

declare module '@sseui/core' {
  interface Commands<ReturnType> {
    selectTextblockEnd: {
      /**
       * Moves the cursor to the end of current text block.
       */
      selectTextblockEnd: () => ReturnType
    }
  }
}

export const selectTextblockEnd: RawCommands['selectTextblockEnd'] = () => ({ state, dispatch }) => {
  return originalSelectTextblockEnd(state, dispatch)
}
