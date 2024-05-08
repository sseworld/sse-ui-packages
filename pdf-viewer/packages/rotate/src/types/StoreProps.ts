/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { RotateDirection } from '@sse-ui/pdf-core';

export interface StoreProps {
    rotate?(direction: RotateDirection): void;
    rotatePage?(pageIndex: number, direction: RotateDirection): void;
}
