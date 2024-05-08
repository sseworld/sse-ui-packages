/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { type PdfJs } from '../types/PdfJs';

// Return `true` if `a` is the same as `b`
export const isSameUrl = (a: PdfJs.FileData, b: PdfJs.FileData): boolean => {
    const typeA = typeof a;
    const typeB = typeof b;

    if (typeA === 'string' && typeB === 'string' && a === b) {
        return true;
    }
    if (typeA === 'object' && typeB === 'object') {
        return a.length === b.length && (a as Uint8Array).every((v, i) => v === b[i]);
    }
    return false;
};
