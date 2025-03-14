/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import {
    Button,
    classNames,
    LocalizationContext,
    ProgressBar,
    TextDirection,
    ThemeContext,
    type LocalizationMap,
} from '@sse-ui/pdf-core';
import * as React from 'react';

export const PrintProgress: React.FC<{
    numLoadedPages: number;
    numPages: number;
    onCancel(): void;
}> = ({ numLoadedPages, numPages, onCancel }) => {
    const { l10n } = React.useContext(LocalizationContext);
    const { direction } = React.useContext(ThemeContext);
    const isRtl = direction === TextDirection.RightToLeft;
    const progress = Math.floor((numLoadedPages * 100) / numPages);

    return (
        <div className="rpv-print__progress">
            <div
                className={classNames({
                    'rpv-print__progress-body': true,
                    'rpv-print__progress-body--rtl': isRtl,
                })}
            >
                <div className="rpv-print__progress-message">
                    {l10n && l10n.print
                        ? ((l10n.print as LocalizationMap).preparingDocument as string)
                        : 'Preparing document ...'}
                </div>
                <div className="rpv-print__progress-bar">
                    <ProgressBar progress={progress} />
                </div>
                <Button onClick={onCancel}>
                    {l10n && l10n.print ? ((l10n.print as LocalizationMap).cancel as string) : 'Cancel'}
                </Button>
            </div>
        </div>
    );
};
