/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import { ThemeContext } from '@sse-ui/pdf-core';
import * as React from 'react';
import { SwitchThemeButton } from './SwitchThemeButton';

export interface RenderSwitchThemeProps {
    onClick: () => void;
}

type RenderSwitchTheme = (props: RenderSwitchThemeProps) => React.ReactElement;

export interface SwitchThemeProps {
    children?: RenderSwitchTheme;
}

export const SwitchTheme: React.FC<{
    children?: RenderSwitchTheme;
}> = ({ children }) => {
    const theme = React.useContext(ThemeContext);
    const defaultChildern = (props: RenderSwitchThemeProps) => <SwitchThemeButton onClick={props.onClick} />;
    const render = children || defaultChildern;

    return render({
        onClick: () => theme.setCurrentTheme(theme.currentTheme === 'dark' ? 'light' : 'dark'),
    });
};
