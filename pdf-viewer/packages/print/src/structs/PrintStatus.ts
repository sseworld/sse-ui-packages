/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

export enum PrintStatus {
    CheckingPermission = 'CheckingPermission',
    Inactive = 'Inactive',
    Preparing = 'Preparing',
    Cancelled = 'Cancelled',
    Ready = 'Ready',
}
