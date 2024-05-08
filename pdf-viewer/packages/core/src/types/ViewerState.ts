/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { FullScreenMode } from '../structs/FullScreenMode';
import { ScrollMode } from '../structs/ScrollMode';
import { ViewMode } from '../structs/ViewMode';
import { type OpenFile } from './OpenFile';

export interface ViewerState {
    // The current opened file. It can be changed from outside, such as user drags and drops an external file
    // or user opens a file from toolbar
    file: OpenFile;
    fullScreenMode: FullScreenMode;
    // The current page index
    pageIndex: number;
    // Size of page
    pageHeight: number;
    pageWidth: number;
    // The rotation for each page
    pagesRotation: Map<number, number>;
    // The last page which is rotated
    rotatedPage?: number;
    rotation: number;
    // The current zoom level
    scale: number;
    // The current scroll mode
    scrollMode: ScrollMode;
    // The current view mode
    viewMode: ViewMode;
}
