/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { type PdfJs } from './PdfJs';

export interface ZoomEvent {
    doc: PdfJs.PdfDocument;
    scale: number;
}
