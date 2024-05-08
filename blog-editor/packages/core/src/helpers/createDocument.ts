import { Node as ProseMirrorNode, ParseOptions, Schema } from '@sseui/pm/model'

import { Content } from '../types.js'
import { createNodeFromContent } from './createNodeFromContent.js'

export function createDocument(
  content: Content,
  schema: Schema,
  parseOptions: ParseOptions = {},
): ProseMirrorNode {
  return createNodeFromContent(content, schema, { slice: false, parseOptions }) as ProseMirrorNode
}
