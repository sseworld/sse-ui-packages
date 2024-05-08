/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

export interface MatchPosition {
    // The index of match in the page
    // Each page may have multiple matches
    matchIndex: number;
    pageIndex: number;
}
