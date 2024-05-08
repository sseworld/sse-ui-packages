import { Node as ProseMirrorNode } from '@sseui/pm/model'
import { Transaction } from '@sseui/pm/state'
import { Transform } from '@sseui/pm/transform'

/**
 * Returns a new `Transform` based on all steps of the passed transactions.
 */
export function combineTransactionSteps(
  oldDoc: ProseMirrorNode,
  transactions: Transaction[],
): Transform {
  const transform = new Transform(oldDoc)

  transactions.forEach(transaction => {
    transaction.steps.forEach(step => {
      transform.step(step)
    })
  })

  return transform
}
