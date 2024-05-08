/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import { MenuItem, ViewMode } from '@sse-ui/pdf-core';
import * as React from 'react';
import { SwitchViewModeDecorator } from './SwitchViewModeDecorator';
import { type RenderSwitchViewModeProps } from './types/RenderSwitchViewModeProps';

export const SwitchViewModeMenuItem: React.FC<RenderSwitchViewModeProps> = ({
    isDisabled,
    isSelected,
    mode,
    onClick,
}) => {
    let testId = '';
    switch (mode) {
        case ViewMode.DualPage:
            testId = 'view-mode__dual-menu';
            break;
        case ViewMode.DualPageWithCover:
            testId = 'view-mode__dual-cover-menu';
            break;
        case ViewMode.SinglePage:
        default:
            testId = 'view-mode__single-menu';
            break;
    }

    return (
        <SwitchViewModeDecorator mode={mode} onClick={onClick}>
            {(props) => (
                <MenuItem
                    checked={isSelected}
                    icon={props.icon}
                    isDisabled={isDisabled}
                    testId={testId}
                    onClick={props.onClick}
                >
                    {props.label}
                </MenuItem>
            )}
        </SwitchViewModeDecorator>
    );
};
