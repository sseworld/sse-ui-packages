import { newlineInCode as originalNewlineInCode } from '@sseui/pm/commands'

import { RawCommands } from '../types.js'

declare module '@sseui/core' {
  interface Commands<ReturnType> {
    newlineInCode: {
      /**
       * Add a newline character in code.
       */
      newlineInCode: () => ReturnType
    }
  }
}

export const newlineInCode: RawCommands['newlineInCode'] = () => ({ state, dispatch }) => {
  return originalNewlineInCode(state, dispatch)
}
