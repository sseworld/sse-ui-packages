/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

export enum Trigger {
    // It will not trigger the highlight. It is often used to render the highlight areas
    None = 'None',
    // Show the target after users select text
    TextSelection = 'TextSelection',
}
