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
export interface SwitchSelectionModeProps {
    children?: (props: RenderSwitchSelectionModeProps) => React.ReactElement;
    mode: SelectionMode;
}

export interface RenderSwitchSelectionModeProps {
    isSelected: boolean;
    mode: SelectionMode;
    onClick(): void;
}

export interface SwitchSelectionModeButtonProps {
    mode: SelectionMode;
}

export interface SwitchSelectionModeMenuItemProps {
    mode: SelectionMode;
    onClick(): void;
}

// Structs
export enum SelectionMode {
    Hand = 'Hand',
    Text = 'Text',
}

// Plugin
export interface SelectionModePlugin extends Plugin {
    SwitchSelectionMode(props: SwitchSelectionModeProps): React.ReactElement;
    SwitchSelectionModeButton(props: SwitchSelectionModeButtonProps): React.ReactElement;
    SwitchSelectionModeMenuItem(props: SwitchSelectionModeMenuItemProps): React.ReactElement;
}

export interface SelectionModePluginProps {
    selectionMode?: SelectionMode;
}

export function selectionModePlugin(props?: SelectionModePluginProps): SelectionModePlugin;

// Components
export class HandToolIcon extends React.Component {}
export class TextSelectionIcon extends React.Component {}
