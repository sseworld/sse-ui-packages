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
import { PrintIcon } from './PrintIcon';
import { type RenderPrintProps } from './types/RenderPrintProps';

export const PrintButton: React.FC<RenderPrintProps> = ({ enableShortcuts, onClick }) => {
    const { l10n } = React.useContext(LocalizationContext);
    const label = l10n && l10n.print ? ((l10n.print as LocalizationMap).print as string) : 'Print';
    const ariaKeyShortcuts = enableShortcuts ? (isMac() ? 'Meta+P' : 'Ctrl+P') : '';

    return (
        <Tooltip
            ariaControlsSuffix="print"
            position={Position.BottomCenter}
            target={
                <MinimalButton
                    ariaKeyShortcuts={ariaKeyShortcuts}
                    ariaLabel={label}
                    testId="print__button"
                    onClick={onClick}
                >
                    <PrintIcon />
                </MinimalButton>
            }
            content={() => label}
        />
    );
};
