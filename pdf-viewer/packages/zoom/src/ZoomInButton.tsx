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
import { type RenderZoomInProps } from './types/RenderZoomInProps';
import { ZoomInIcon } from './ZoomInIcon';

export const ZoomInButton: React.FC<RenderZoomInProps> = ({ enableShortcuts, onClick }) => {
    const { l10n } = React.useContext(LocalizationContext);
    const label = l10n && l10n.zoom ? ((l10n.zoom as LocalizationMap).zoomIn as string) : 'Zoom in';
    const ariaKeyShortcuts = enableShortcuts ? (isMac() ? 'Meta+=' : 'Ctrl+=') : '';

    return (
        <Tooltip
            ariaControlsSuffix="zoom-in"
            position={Position.BottomCenter}
            target={
                <MinimalButton
                    ariaKeyShortcuts={ariaKeyShortcuts}
                    ariaLabel={label}
                    testId="zoom__in-button"
                    onClick={onClick}
                >
                    <ZoomInIcon />
                </MinimalButton>
            }
            content={() => label}
        />
    );
};
