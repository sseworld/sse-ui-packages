/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { RotateDirection } from '../structs/RotateDirection';
import { type PdfJs } from './PdfJs';

export interface RotatePageEvent {
    direction: RotateDirection;
    doc: PdfJs.PdfDocument;
    pageIndex: number;
    rotation: number;
}
