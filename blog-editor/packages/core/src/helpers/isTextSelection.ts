import { TextSelection } from '@sseui/pm/state'

export function isTextSelection(value: unknown): value is TextSelection {
  return value instanceof TextSelection
}
