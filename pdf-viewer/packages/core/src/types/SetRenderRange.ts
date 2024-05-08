/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

export interface VisiblePagesRange {
    endPage: number;
    numPages: number;
    startPage: number;
}

export type SetRenderRange = (visiblePagesRange: VisiblePagesRange) => { endPage: number; startPage: number };
