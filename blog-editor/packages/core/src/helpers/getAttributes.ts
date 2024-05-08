import { MarkType, NodeType } from '@sseui/pm/model'
import { EditorState } from '@sseui/pm/state'

import { getMarkAttributes } from './getMarkAttributes.js'
import { getNodeAttributes } from './getNodeAttributes.js'
import { getSchemaTypeNameByName } from './getSchemaTypeNameByName.js'

export function getAttributes(
  state: EditorState,
  typeOrName: string | NodeType | MarkType,
): Record<string, any> {
  const schemaType = getSchemaTypeNameByName(
    typeof typeOrName === 'string' ? typeOrName : typeOrName.name,
    state.schema,
  )

  if (schemaType === 'node') {
    return getNodeAttributes(state, typeOrName as NodeType)
  }

  if (schemaType === 'mark') {
    return getMarkAttributes(state, typeOrName as MarkType)
  }

  return {}
}
