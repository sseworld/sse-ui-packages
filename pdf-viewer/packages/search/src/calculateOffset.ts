/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { type Offset } from '@sse-ui/pdf-core';

export const calculateOffset = (children: HTMLElement, parent: HTMLElement): Offset => {
    let top = children.offsetTop;
    let left = children.offsetLeft;

    let p = children.parentElement;
    while (p && p !== parent) {
        top += p.offsetTop;
        left += p.offsetLeft;
        p = p.parentElement;
    }
    return {
        left,
        top,
    };
};
