/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import { MinimalButton, Position, ScrollMode, Tooltip } from '@sse-ui/pdf-core';
import * as React from 'react';
import { SwitchScrollModeDecorator } from './SwitchScrollModeDecorator';
import { type RenderSwitchScrollModeProps } from './types/RenderSwitchScrollModeProps';

export const SwitchScrollModeButton: React.FC<RenderSwitchScrollModeProps> = ({
    isDisabled,
    isSelected,
    mode,
    onClick,
}) => {
    let testId = '';
    switch (mode) {
        case ScrollMode.Horizontal:
            testId = 'scroll-mode__horizontal-button';
            break;
        case ScrollMode.Page:
            testId = 'scroll-mode__page-button';
            break;
        case ScrollMode.Wrapped:
            testId = 'scroll-mode__wrapped-button';
            break;
        case ScrollMode.Vertical:
        default:
            testId = 'scroll-mode__vertical-button';
            break;
    }

    return (
        <SwitchScrollModeDecorator mode={mode} onClick={onClick}>
            {(props) => (
                <Tooltip
                    ariaControlsSuffix="scroll-mode-switch"
                    position={Position.BottomCenter}
                    target={
                        <MinimalButton
                            ariaLabel={props.label}
                            isDisabled={isDisabled}
                            isSelected={isSelected}
                            testId={testId}
                            onClick={props.onClick}
                        >
                            {props.icon}
                        </MinimalButton>
                    }
                    content={() => props.label}
                />
            )}
        </SwitchScrollModeDecorator>
    );
};
