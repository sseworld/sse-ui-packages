/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import {
    classNames,
    LocalizationContext,
    MinimalButton,
    TextDirection,
    ThemeContext,
    type LocalizationMap,
} from '@sse-ui/pdf-core';
import * as React from 'react';
import { ExitFullScreenIcon } from './ExitFullScreenIcon';

export const ExitFullScreenButton: React.FC<{
    onClick(): void;
}> = ({ onClick }) => {
    const { l10n } = React.useContext(LocalizationContext);
    const { direction } = React.useContext(ThemeContext);
    const isRtl = direction === TextDirection.RightToLeft;

    const exitFullScreenLabel =
        l10n && l10n.fullScreen ? ((l10n.fullScreen as LocalizationMap).exitFullScreen as string) : 'Exit full screen';

    return (
        <div
            className={classNames({
                'rpv-full-screen__exit-button': true,
                'rpv-full-screen__exit-button--ltr': !isRtl,
                'rpv-full-screen__exit-button--rtl': isRtl,
            })}
        >
            <MinimalButton
                ariaLabel={exitFullScreenLabel as string}
                testId="full-screen__exit-button"
                onClick={onClick}
            >
                <ExitFullScreenIcon />
            </MinimalButton>
        </div>
    );
};
