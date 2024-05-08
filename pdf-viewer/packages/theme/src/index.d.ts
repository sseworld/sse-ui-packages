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
export interface SwitchThemeProps {
    children?: (props: RenderSwitchThemeProps) => React.ReactElement;
}

export interface SwitchThemeMenuItemProps {
    onClick(): void;
}

export interface RenderSwitchThemeProps {
    onClick(): void;
}

// Plugin
export interface ThemePlugin extends Plugin {
    SwitchTheme: (props: SwitchThemeProps) => React.ReactElement;
    SwitchThemeButton: () => React.ReactElement;
    SwitchThemeMenuItem: (props: SwitchThemeMenuItemProps) => React.ReactElement;
}

export function themePlugin(): ThemePlugin;

// Components
export class DarkIcon extends React.Component {}
export class LightIcon extends React.Component {}
