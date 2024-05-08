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
import { PrintIcon } from './PrintIcon';

export interface PrintMenuItemProps {
    onClick(): void;
}

export const PrintMenuItem: React.FC<PrintMenuItemProps> = ({ onClick }) => {
    const { l10n } = React.useContext(LocalizationContext);
    const label = l10n && l10n.print ? ((l10n.print as LocalizationMap).print as string) : 'Print';

    return (
        <MenuItem icon={<PrintIcon />} testId="print__menu" onClick={onClick}>
            {label}
        </MenuItem>
    );
};
