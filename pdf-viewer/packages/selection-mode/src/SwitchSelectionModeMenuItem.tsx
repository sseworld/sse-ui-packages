/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import { MenuItem } from '@sse-ui/pdf-core';
import * as React from 'react';
import { SwitchSelectionModeDecorator } from './SwitchSelectionModeDecorator';
import { SelectionMode } from './structs/SelectionMode';
import { RenderSwitchSelectionModeProps } from './types/RenderSwitchSelectionModeProps';

export const SwitchSelectionModeMenuItem: React.FC<RenderSwitchSelectionModeProps> = ({
    isSelected,
    mode,
    onClick,
}) => {
    let testId = '';
    switch (mode) {
        case SelectionMode.Hand:
            testId = 'selection-mode__hand-menu';
            break;
        case SelectionMode.Text:
        default:
            testId = 'selection-mode__text-menu';
    }

    return (
        <SwitchSelectionModeDecorator mode={mode} onClick={onClick}>
            {(props) => (
                <MenuItem checked={isSelected} icon={props.icon} testId={testId} onClick={props.onClick}>
                    {props.label}
                </MenuItem>
            )}
        </SwitchSelectionModeDecorator>
    );
};
