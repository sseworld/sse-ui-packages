import { Node as ProseMirrorNode } from '@sseui/pm/model'

import { NodeWithPos, Predicate, Range } from '../types.js'

/**
 * Same as `findChildren` but searches only within a `range`.
 */
export function findChildrenInRange(
  node: ProseMirrorNode,
  range: Range,
  predicate: Predicate,
): NodeWithPos[] {
  const nodesWithPos: NodeWithPos[] = []

  // if (range.from === range.to) {
  //   const nodeAt = node.nodeAt(range.from)

  //   if (nodeAt) {
  //     nodesWithPos.push({
  //       node: nodeAt,
  //       pos: range.from,
  //     })
  //   }
  // }

  node.nodesBetween(range.from, range.to, (child, pos) => {
    if (predicate(child)) {
      nodesWithPos.push({
        node: child,
        pos,
      })
    }
  })

  return nodesWithPos
}
