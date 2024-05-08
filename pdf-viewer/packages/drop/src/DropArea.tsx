/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import { classNames, LocalizationContext, TextDirection, ThemeContext, type LocalizationMap } from '@sse-ui/pdf-core';
import * as React from 'react';
import { useDrop } from './useDrop';

export const DropArea: React.FC<{
    containerRef: React.RefObject<HTMLDivElement>;
    openFile(file: File): void;
}> = ({ containerRef, openFile }) => {
    const { direction } = React.useContext(ThemeContext);
    const isRtl = direction === TextDirection.RightToLeft;

    const { isDragging } = useDrop(containerRef, (files) => {
        if (files.length === 0) {
            return;
        }
        openFile(files[0]);
    });
    const { l10n } = React.useContext(LocalizationContext);

    return (
        <>
            {isDragging && (
                <div className="rpv-drop__area">
                    <div
                        className={classNames({
                            'rpv-drop__area-body': true,
                            'rpv-drop__area-body--rtl': isRtl,
                        })}
                    >
                        {l10n && l10n.drop
                            ? ((l10n.drop as LocalizationMap).dragDropFile as string)
                            : 'Drag and drop a PDF document here'}
                    </div>
                </div>
            )}
        </>
    );
};
