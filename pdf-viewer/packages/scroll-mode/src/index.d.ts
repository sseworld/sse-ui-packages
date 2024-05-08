/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { ScrollMode, ViewMode, type Plugin } from '@sse-ui/pdf-core';
import * as React from 'react';

// Types
export interface SwitchScrollModeProps {
    children?: (props: RenderSwitchScrollModeProps) => React.ReactElement;
    mode: ScrollMode;
}

export interface RenderSwitchScrollModeProps {
    isDisabled: boolean;
    isSelected: boolean;
    mode: ScrollMode;
    onClick(): void;
}

export interface SwitchScrollModeButtonProps {
    mode: ScrollMode;
}

export interface SwitchScrollModeMenuItemProps {
    mode: ScrollMode;
    onClick(): void;
}

export interface SwitchViewModeProps {
    children?: (props: RenderSwitchViewModeProps) => React.ReactElement;
    mode: ViewMode;
}

export interface RenderSwitchViewModeProps {
    isDisabled: boolean;
    isSelected: boolean;
    mode: ViewMode;
    onClick(): void;
}

export interface SwitchViewModeButtonProps {
    mode: ViewMode;
}

export interface SwitchViewModeMenuItemProps {
    mode: ViewMode;
    onClick(): void;
}

// Plugin
export interface ScrollModePlugin extends Plugin {
    switchScrollMode(mode: ScrollMode): void;
    SwitchScrollMode(props: SwitchScrollModeProps): React.ReactElement;
    SwitchScrollModeButton(props: SwitchScrollModeButtonProps): React.ReactElement;
    SwitchScrollModeMenuItem(props: SwitchScrollModeMenuItemProps): React.ReactElement;

    switchViewMode(mode: ViewMode): void;
    SwitchViewMode(props: SwitchViewModeProps): React.ReactElement;
    SwitchViewModeButton(props: SwitchViewModeButtonProps): React.ReactElement;
    SwitchViewModeMenuItem(props: SwitchViewModeMenuItemProps): React.ReactElement;
}

export function scrollModePlugin(): ScrollModePlugin;

// Components
export class DualPageViewModeIcon extends React.Component {}
export class DualPageCoverViewModeIcon extends React.Component {}
export class HorizontalScrollingIcon extends React.Component {}
export class PageScrollingIcon extends React.Component {}
export class VerticalScrollingIcon extends React.Component {}
export class WrappedScrollingIcon extends React.Component {}
