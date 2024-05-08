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
export interface CurrentScaleProps {
    children?: (props: RenderCurrentScaleProps) => React.ReactElement;
}

export interface RenderCurrentScaleProps {
    scale: number;
}

export interface ZoomInProps {
    children?: (props: RenderZoomInProps) => React.ReactElement;
}

export interface ZoomOutProps {
    children?: (props: RenderZoomOutProps) => React.ReactNode;
}

export interface ZoomProps {
    children?: (props: RenderZoomProps) => React.ReactElement;
    levels?: number[];
}

export interface RenderZoomInProps {
    enableShortcuts: boolean;
    onClick: () => void;
}

export interface RenderZoomOutProps {
    enableShortcuts: boolean;
    onClick: () => void;
}

export interface RenderZoomProps {
    scale: number;
    onZoom(newScale: number | SpecialZoomLevel): void;
}

export interface ZoomMenuItemProps {
    onClick: () => void;
}

export interface ZoomPopoverProps {
    levels?: number[];
}

// Plugin
export interface ZoomPluginProps {
    enableShortcuts?: boolean;
}

export interface ZoomPlugin extends Plugin {
    zoomTo: (scale: number | SpecialZoomLevel) => void;
    CurrentScale: (props: CurrentScaleProps) => React.ReactElement;
    ZoomIn: (props: ZoomInProps) => React.ReactElement;
    ZoomInButton: () => React.ReactElement;
    ZoomInMenuItem: (props: ZoomMenuItemProps) => React.ReactElement;
    ZoomOut: (props: ZoomOutProps) => React.ReactElement;
    ZoomOutButton: () => React.ReactElement;
    ZoomOutMenuItem: (props: ZoomMenuItemProps) => React.ReactElement;
    Zoom: (props: ZoomProps) => React.ReactElement;
    ZoomPopover: (props?: ZoomPopoverProps) => React.ReactElement;
}

export function zoomPlugin(props?: ZoomPluginProps): ZoomPlugin;

// Components
export class ZoomInIcon extends React.Component {}
export class ZoomOutIcon extends React.Component {}
