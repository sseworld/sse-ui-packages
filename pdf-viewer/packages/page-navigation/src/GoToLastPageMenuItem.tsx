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
import { DownArrowIcon } from './DownArrowIcon';
import { type RenderGoToPageProps } from './types/index';

export const GoToLastPageMenuItem: React.FC<RenderGoToPageProps> = ({ isDisabled, onClick }) => {
    const { l10n } = React.useContext(LocalizationContext);
    const label =
        l10n && l10n.pageNavigation ? ((l10n.pageNavigation as LocalizationMap).goToLastPage as string) : 'Last page';

    return (
        <MenuItem
            icon={<DownArrowIcon />}
            isDisabled={isDisabled}
            testId="page-navigation__last-menu"
            onClick={onClick}
        >
            {label}
        </MenuItem>
    );
};
