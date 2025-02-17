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
import { ExitFullScreenIcon } from './ExitFullScreenIcon';

export const ExitFullScreenButtonWithTooltip: React.FC<{
    onClick(): void;
}> = ({ onClick }) => {
    const { l10n } = React.useContext(LocalizationContext);
    const exitFullScreenLabel =
        l10n && l10n.fullScreen ? ((l10n.fullScreen as LocalizationMap).exitFullScreen as string) : 'Exit full screen';

    return (
        <Tooltip
            ariaControlsSuffix="full-screen-exit"
            position={Position.BottomCenter}
            target={
                <MinimalButton
                    ariaKeyShortcuts="Esc"
                    ariaLabel={exitFullScreenLabel as string}
                    testId="full-screen__exit-button-with-tooltip"
                    onClick={onClick}
                >
                    <ExitFullScreenIcon />
                </MinimalButton>
            }
            content={() => exitFullScreenLabel}
        />
    );
};
