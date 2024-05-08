/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { SpecialZoomLevel, type Plugin } from '@sse-ui/pdf-core';
import * as React from 'react';

// Types
export interface EnterFullScreenProps {
    children?(props: RenderEnterFullScreenProps): React.ReactElement;
}

export interface EnterFullScreenMenuItemProps {
    onClick(): void;
}

export interface RenderEnterFullScreenProps {
    onClick(): void;
}

export interface RenderExitFullScreenProps {
    onClick(): void;
}

// Plugin
export interface FullScreenPlugin extends Plugin {
    EnterFullScreen(props: EnterFullScreenProps): React.ReactElement;
    EnterFullScreenButton(): React.ReactElement;
    EnterFullScreenMenuItem: (props: EnterFullScreenMenuItemProps) => React.ReactElement;
}

export type Zoom = (scale: number | SpecialZoomLevel) => void;

export interface FullScreenPluginProps {
    enableShortcuts?: boolean;
    getFullScreenTarget?(pagesContainer: HTMLElement): HTMLElement;
    renderExitFullScreenButton?: (props: RenderExitFullScreenProps) => React.ReactElement;
    onEnterFullScreen?(zoom: Zoom): void;
    onExitFullScreen?(zoom: Zoom): void;
}

export function fullScreenPlugin(props?: FullScreenPluginProps): FullScreenPlugin;

// Components
export class ExitFullScreenIcon extends React.Component {}
export class FullScreenIcon extends React.Component {}
