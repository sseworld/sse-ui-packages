/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

export const roundToDivide = (a: number, b: number): number => {
    const remainder = a % b;
    return remainder === 0 ? a : Math.floor(a - remainder);
};
