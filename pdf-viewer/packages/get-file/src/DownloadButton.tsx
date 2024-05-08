/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import { LocalizationContext, MinimalButton, Position, Tooltip, type LocalizationMap } from '@sse-ui/pdf-core';
import * as React from 'react';
import { DownloadIcon } from './DownloadIcon';
import { type RenderDownloadProps } from './types/RenderDownloadProps';

export const DownloadButton: React.FC<RenderDownloadProps> = ({ onClick }) => {
    const { l10n } = React.useContext(LocalizationContext);
    const label = l10n && l10n.download ? ((l10n.download as LocalizationMap).download as string) : 'Download';

    return (
        <Tooltip
            ariaControlsSuffix="get-file"
            position={Position.BottomCenter}
            target={
                <MinimalButton ariaLabel={label} testId="get-file__download-button" onClick={onClick}>
                    <DownloadIcon />
                </MinimalButton>
            }
            content={() => label}
        />
    );
};
