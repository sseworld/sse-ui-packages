/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import { LocalizationContext, ViewMode, type LocalizationMap } from '@sse-ui/pdf-core';
import * as React from 'react';
import { DualPageCoverViewModeIcon } from './DualPageCoverViewModeIcon';
import { DualPageViewModeIcon } from './DualPageViewModeIcon';
import { PageScrollingIcon } from './PageScrollingIcon';

interface RenderChildren {
    icon: React.ReactElement;
    label: string;
    onClick(): void;
}

export const SwitchViewModeDecorator: React.FC<{
    children(props: RenderChildren): React.ReactElement;
    mode: ViewMode;
    onClick(): void;
}> = ({ children, mode, onClick }) => {
    const { l10n } = React.useContext(LocalizationContext);
    let label = '';
    let icon = <PageScrollingIcon />;

    switch (mode) {
        case ViewMode.DualPage:
            label = l10n && l10n.scrollMode ? ((l10n.scrollMode as LocalizationMap).dualPage as string) : 'Dual page';
            icon = <DualPageViewModeIcon />;
            break;

        case ViewMode.DualPageWithCover:
            label =
                l10n && l10n.scrollMode
                    ? ((l10n.scrollMode as LocalizationMap).dualPageCover as string)
                    : 'Dual page with cover';
            icon = <DualPageCoverViewModeIcon />;
            break;

        case ViewMode.SinglePage:
        default:
            label =
                l10n && l10n.scrollMode ? ((l10n.scrollMode as LocalizationMap).singlePage as string) : 'Single page';
            icon = <PageScrollingIcon />;
            break;
    }

    return children({ icon, label, onClick });
};
