/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { type PdfJs, type Plugin } from '@sse-ui/pdf-core';
import * as React from 'react';

// Types
export interface RenderPrintProps {
    enableShortcuts: boolean;
    onClick: () => void;
}

export interface PrintMenuItemProps {
    onClick(): void;
}

export interface PrintProps {
    children?: (props: RenderPrintProps) => React.ReactElement;
}

// Plugin
export interface PrintPlugin extends Plugin {
    print: () => void;
    Print: (props: PrintProps) => React.ReactElement;
    PrintButton: () => React.ReactElement;
    PrintMenuItem: (props: PrintMenuItemProps) => React.ReactElement;
    setPages: (printPages: (doc: PdfJs.PdfDocument) => number[]) => void;
}

export interface PrintPluginProps {
    enableShortcuts?: boolean;
    renderProgressBar?(numLoadedPages: number, numPages: number, onCancel: () => void): React.ReactElement;
    setPages?: (doc: PdfJs.PdfDocument) => number[];
}

export function printPlugin(props?: PrintPluginProps): PrintPlugin;

export function getAllPagesNumbers(doc: PdfJs.PdfDocument): number[];
export function getCustomPagesNumbers(customPages: string): (doc: PdfJs.PdfDocument) => number[];
export function getEvenPagesNumbers(doc: PdfJs.PdfDocument): number[];
export function getOddPagesNumbers(doc: PdfJs.PdfDocument): number[];

// Components
export class PrintIcon extends React.Component {}
