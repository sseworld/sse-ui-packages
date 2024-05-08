/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import { isMac, LocalizationContext, MinimalButton, Position, Tooltip, type LocalizationMap } from '@sse-ui/pdf-core';
import * as React from 'react';
import { type RenderZoomOutProps } from './types/RenderZoomOutProps';
import { ZoomOutIcon } from './ZoomOutIcon';

export const ZoomOutButton: React.FC<RenderZoomOutProps> = ({ enableShortcuts, onClick }) => {
    const { l10n } = React.useContext(LocalizationContext);
    const label = l10n && l10n.zoom ? ((l10n.zoom as LocalizationMap).zoomOut as string) : 'Zoom out';
    const ariaKeyShortcuts = enableShortcuts ? (isMac() ? 'Meta+-' : 'Ctrl+-') : '';

    return (
        <Tooltip
            ariaControlsSuffix="zoom-out"
            position={Position.BottomCenter}
            target={
                <MinimalButton
                    ariaKeyShortcuts={ariaKeyShortcuts}
                    ariaLabel={label}
                    testId="zoom__out-button"
                    onClick={onClick}
                >
                    <ZoomOutIcon />
                </MinimalButton>
            }
            content={() => label}
        />
    );
};
