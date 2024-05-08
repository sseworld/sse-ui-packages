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
export interface ShowPropertiesMenuItemProps {
    onClick: () => void;
}

export interface ShowPropertiesProps {
    children?: (props: RenderShowPropertiesProps) => React.ReactElement;
}

export interface RenderShowPropertiesProps {
    onClick(): void;
}

// Plugin
export interface PropertiesPlugin extends Plugin {
    ShowProperties: (props: ShowPropertiesProps) => React.ReactElement;
    ShowPropertiesButton(): React.ReactElement;
    ShowPropertiesMenuItem: (props: ShowPropertiesMenuItemProps) => React.ReactElement;
}

export function propertiesPlugin(): PropertiesPlugin;

// Components
export class InfoIcon extends React.Component {}
