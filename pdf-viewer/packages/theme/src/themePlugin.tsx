/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import { type Plugin } from '@sse-ui/pdf-core';
import * as React from 'react';
import { SwitchTheme, SwitchThemeProps } from './SwitchTheme';
import { SwitchThemeButton } from './SwitchThemeButton';
import { SwitchThemeMenuItem, SwitchThemeMenuItemProps } from './SwitchThemeMenuItem';

export interface ThemePlugin extends Plugin {
    SwitchTheme: (props: SwitchThemeProps) => React.ReactElement;
    SwitchThemeButton: () => React.ReactElement;
    SwitchThemeMenuItem: (props: SwitchThemeMenuItemProps) => React.ReactElement;
}

export const themePlugin = (): ThemePlugin => {
    const SwitchThemeDecorator = (props: SwitchThemeProps) => <SwitchTheme {...props} />;

    const SwitchThemeButtonDecorator = () => (
        <SwitchThemeDecorator>{(props) => <SwitchThemeButton {...props} />}</SwitchThemeDecorator>
    );

    const SwitchThemeMenuItemDecorator = (props: SwitchThemeMenuItemProps) => (
        <SwitchThemeDecorator>
            {(p) => (
                <SwitchThemeMenuItem
                    onClick={() => {
                        p.onClick();
                        props.onClick();
                    }}
                />
            )}
        </SwitchThemeDecorator>
    );

    return {
        SwitchTheme: SwitchThemeDecorator,
        SwitchThemeButton: SwitchThemeButtonDecorator,
        SwitchThemeMenuItem: SwitchThemeMenuItemDecorator,
    };
};
