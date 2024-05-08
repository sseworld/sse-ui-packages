/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { type PdfJs } from '@sse-ui/pdf-core';

export const shouldBeCollapsed = (bookmark: PdfJs.Outline): boolean => {
    const { count, items } = bookmark;
    if (count >= 0) {
        return false;
    }
    let numSubItems = items.length;
    if (numSubItems === 0) {
        return false;
    }

    let subItems = items.concat([]);
    while (subItems.length > 0) {
        const firstChild = subItems.shift();
        const children = firstChild.items;
        if (firstChild.count && children && firstChild.count > 0 && children.length > 0) {
            numSubItems += children.length;
            subItems = subItems.concat(children);
        }
    }

    return Math.abs(count) === numSubItems;
};
