/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { FullScreenMode, SpecialZoomLevel } from '@sse-ui/pdf-core';

export interface StoreProps {
    enterFullScreenMode(target: HTMLElement): void;
    exitFullScreenMode(): void;
    fullScreenMode: FullScreenMode;
    getPagesContainer?(): HTMLElement;
    zoom(scale: number | SpecialZoomLevel): void;
}
