import { Node as ProseMirrorNode } from '@sseui/pm/model'

import { TextSerializer } from '../types.js'
import { getTextBetween } from './getTextBetween.js'

export function getText(
  node: ProseMirrorNode,
  options?: {
    blockSeparator?: string
    textSerializers?: Record<string, TextSerializer>
  },
) {
  const range = {
    from: 0,
    to: node.content.size,
  }

  return getTextBetween(node, range, options)
}
