/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import { LocalizationContext, MenuItem, type LocalizationMap } from '@sse-ui/pdf-core';
import * as React from 'react';
import { DownloadIcon } from './DownloadIcon';

export interface DownloadMenuItemProps {
    onClick(): void;
}

export const DownloadMenuItem: React.FC<DownloadMenuItemProps> = ({ onClick }) => {
    const { l10n } = React.useContext(LocalizationContext);
    const label = l10n && l10n.download ? ((l10n.download as LocalizationMap).download as string) : 'Download';

    return (
        <MenuItem icon={<DownloadIcon />} testId="get-file__download-menu" onClick={onClick}>
            {label}
        </MenuItem>
    );
};
