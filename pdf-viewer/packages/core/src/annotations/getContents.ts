/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { type PdfJs } from '../types/PdfJs';

export const getContents = (annotation: PdfJs.Annotation): string => {
    // `contents` property is deprecated
    return annotation.contentsObj ? annotation.contentsObj.str : annotation.contents || '';
};
