/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import {
    LocalizationContext,
    Menu,
    MenuItem,
    MinimalButton,
    Popover,
    Position,
    Tooltip,
    type LocalizationMap,
    type Toggle,
} from '@sse-ui/pdf-core';
import * as React from 'react';
import { LocaleIcon } from './LocaleIcon';

export interface LocalePopoverProps {
    initialLocale?: string;
    locales: {
        [locale: string]: string;
    };
    localizations: {
        [locale: string]: LocalizationMap;
    };
    onUpdateLocalization: (locale: string, localization: LocalizationMap) => void;
}

export const LocalePopover: React.FC<LocalePopoverProps> = ({
    initialLocale = 'en_US',
    locales,
    localizations,
    onUpdateLocalization,
}) => {
    const { l10n } = React.useContext(LocalizationContext);

    const renderTarget = (toggle: Toggle, opened: boolean) => {
        const label =
            l10n && l10n.localeSwitcher
                ? ((l10n.localeSwitcher as LocalizationMap).switchLocale as string)
                : 'Switch locale';

        return (
            <Tooltip
                ariaControlsSuffix="locale-switcher"
                position={Position.BottomCenter}
                target={
                    <MinimalButton
                        ariaLabel={label}
                        isSelected={opened}
                        testId="locale-switcher__popover-target"
                        onClick={toggle}
                    >
                        <LocaleIcon />
                    </MinimalButton>
                }
                content={() => label}
                offset={{ left: 0, top: 8 }}
            />
        );
    };

    const renderContent = (toggle: Toggle) => {
        const changeLocale = (newLocale: string) => {
            onUpdateLocalization(newLocale, localizations[newLocale] || {});
            toggle();
        };

        return (
            <Menu>
                {Object.keys(locales).map((loc) => {
                    return (
                        <MenuItem key={loc} checked={initialLocale === loc} onClick={() => changeLocale(loc)}>
                            {locales[loc]}
                        </MenuItem>
                    );
                })}
            </Menu>
        );
    };

    return (
        <Popover
            ariaControlsSuffix="locale-switcher"
            ariaHasPopup="menu"
            position={Position.BottomRight}
            target={renderTarget}
            content={renderContent}
            offset={{ left: 0, top: 8 }}
            closeOnClickOutside={true}
            closeOnEscape={true}
        />
    );
};
