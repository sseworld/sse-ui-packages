/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { SpecialZoomLevel } from '../structs/SpecialZoomLevel';

export type DestinationOffsetFromViewport = (viewportWidth: number, viewportHeight: number) => number;

export interface Destination {
    bottomOffset: number | DestinationOffsetFromViewport;
    label?: string;
    leftOffset: number | DestinationOffsetFromViewport;
    pageIndex: number;
    scaleTo?: number | SpecialZoomLevel;
}
