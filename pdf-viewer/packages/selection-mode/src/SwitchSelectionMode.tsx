/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import { type Store } from '@sse-ui/pdf-core';
import * as React from 'react';
import { SwitchSelectionModeButton } from './SwitchSelectionModeButton';
import { SelectionMode } from './structs/SelectionMode';
import { type RenderSwitchSelectionModeProps } from './types/RenderSwitchSelectionModeProps';
import { type StoreProps } from './types/StoreProps';

type RenderSwitchSelectionMode = (props: RenderSwitchSelectionModeProps) => React.ReactElement;

export interface SwitchSelectionModeProps {
    children?: RenderSwitchSelectionMode;
    mode: SelectionMode;
}

export const SwitchSelectionMode: React.FC<{
    children?: RenderSwitchSelectionMode;
    mode: SelectionMode;
    store: Store<StoreProps>;
}> = ({ children, mode, store }) => {
    const onClick = () => store.update('selectionMode', mode);

    const isSelected = mode === store.get('selectionMode');

    const defaultChildren = (props: RenderSwitchSelectionModeProps) => (
        <SwitchSelectionModeButton isSelected={isSelected} mode={props.mode} onClick={props.onClick} />
    );
    const render = children || defaultChildren;

    return render({
        isSelected,
        mode,
        onClick,
    });
};
