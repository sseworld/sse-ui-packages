import { RawCommands } from '../types.js'

declare module '@sseui/core' {
  interface Commands<ReturnType> {
    clearContent: {
      /**
       * Clear the whole document.
       */
      clearContent: (emitUpdate?: boolean) => ReturnType,
    }
  }
}

export const clearContent: RawCommands['clearContent'] = (emitUpdate = false) => ({ commands }) => {
  return commands.setContent('', emitUpdate)
}
