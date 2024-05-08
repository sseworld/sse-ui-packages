/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { type PdfJs } from '../types/PdfJs';

export const getTitle = (annotation: PdfJs.Annotation): string => {
    // `title` property is deprecated
    return annotation.titleObj ? annotation.titleObj.str : annotation.title || '';
};
