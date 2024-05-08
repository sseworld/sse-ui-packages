/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { RotateDirection, type Plugin } from '@sse-ui/pdf-core';
import * as React from 'react';

// Types
export interface RenderRotatePageProps {
    onRotatePage(pageIndex: number, direction: RotateDirection): void;
}
export interface RotatePageProps {
    children: (props: RenderRotatePageProps) => React.ReactElement;
}

export interface RotateProps {
    children?: (props: RenderRotateProps) => React.ReactElement;
    direction: RotateDirection;
}

export interface RenderRotateProps {
    direction: RotateDirection;
    onClick(): void;
}

export interface RotateDecoratorProps {
    onClick(): void;
}

// Plugin
export interface RotatePlugin extends Plugin {
    Rotate(props: RotateProps): React.ReactElement;
    RotatePage(props: RotatePageProps): React.ReactElement;
    RotateBackwardButton(): React.ReactElement;
    RotateBackwardMenuItem(props: RotateDecoratorProps): React.ReactElement;
    RotateForwardButton(): React.ReactElement;
    RotateForwardMenuItem(props: RotateDecoratorProps): React.ReactElement;
}

export function rotatePlugin(): RotatePlugin;

// Components
export class RotateBackwardIcon extends React.Component {}
export class RotateForwardIcon extends React.Component {}
