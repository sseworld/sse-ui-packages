/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

export const maxByKey = <T extends Record<string, any>, K extends keyof T>(arr: T[], key: K): T =>
    arr.reduce((a, b) => (a[key] >= b[key] ? a : b), {} as T);
