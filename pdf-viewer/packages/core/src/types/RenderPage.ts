/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import * as React from 'react';
import { RotateDirection } from '../structs/RotateDirection';
import { type PdfJs } from './PdfJs';
import { type Slot } from './Slot';

export interface RenderPageProps {
    annotationLayer: Slot;
    canvasLayer: Slot;
    // Is the canvas layer rendered completely?
    canvasLayerRendered: boolean;
    doc: PdfJs.PdfDocument;
    height: number;
    pageIndex: number;
    rotation: number;
    scale: number;
    svgLayer: Slot;
    textLayer: Slot;
    // Is the text layer rendered completely?
    textLayerRendered: boolean;
    width: number;
    // Mark as the page rendered completely
    markRendered(pageIndex: number): void;
    onRotatePage(direction: RotateDirection): void;
}

export type RenderPage = (props: RenderPageProps) => React.ReactElement;
