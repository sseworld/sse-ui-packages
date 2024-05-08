/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { type Destination, type PdfJs } from '@sse-ui/pdf-core';

export interface StoreProps {
    currentPage?: number;
    doc?: PdfJs.PdfDocument;
    jumpToDestination?(destination: Destination): void;
    jumpToNextDestination?(): void;
    jumpToNextPage(): void;
    jumpToPage?(pageIndex: number): void;
    jumpToPreviousDestination?(): void;
    jumpToPreviousPage(): void;
    numberOfPages?: number;
}
