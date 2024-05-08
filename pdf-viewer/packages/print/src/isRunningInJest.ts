/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

// Returns `true` if the code is running in Jest environment
export const isRunningInJest = () => typeof process !== 'undefined' && process.env.JEST_WORKER_ID !== undefined;
