/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { type Plugin } from '@sse-ui/pdf-core';
import * as React from 'react';

// Types
export interface OpenProps {
    children?: (props: RenderOpenProps) => React.ReactElement;
}

export interface RenderOpenProps {
    onClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Plugin
export interface OpenPlugin extends Plugin {
    Open: (props: OpenProps) => React.ReactElement;
    OpenButton: () => React.ReactElement;
    OpenMenuItem: () => React.ReactElement;
}

export interface OpenPluginProps {
    enableShortcuts?: boolean;
}

export function openPlugin(props?: OpenPluginProps): OpenPlugin;

// Components
export class OpenFileIcon extends React.Component {}
