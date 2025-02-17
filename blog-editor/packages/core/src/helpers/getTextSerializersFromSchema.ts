import { Schema } from '@sseui/pm/model'

import { TextSerializer } from '../types.js'

export function getTextSerializersFromSchema(schema: Schema): Record<string, TextSerializer> {
  return Object.fromEntries(
    Object.entries(schema.nodes)
      .filter(([, node]) => node.spec.toText)
      .map(([name, node]) => [name, node.spec.toText]),
  )
}
