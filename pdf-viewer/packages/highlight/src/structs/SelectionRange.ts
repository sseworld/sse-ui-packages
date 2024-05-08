/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

export enum SelectionRange {
    // User selects text from the same div
    SameDiv = 'SameDiv',
    // User selects text from different divs in a single page
    DifferentDivs = 'DifferentDivs',
    // User selects text in multiple pages
    DifferentPages = 'DifferentPages',
}
