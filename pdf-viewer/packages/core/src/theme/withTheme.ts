/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import * as React from 'react';
import { usePrevious } from '../hooks/usePrevious';
import { isDarkMode } from '../utils/isDarkMode';
import { DARK_THEME } from './darkTheme';
import { LIGHT_THEME } from './lightTheme';
import { useTheme } from './useTheme';

export interface RenderThemeChildrenProps {
    currentTheme: string;
    setCurrentTheme(theme: string): void;
}

export const withTheme = (theme: string, onSwitchTheme?: (theme: string) => void) => {
    const initialTheme = React.useMemo(() => (theme === 'auto' ? (isDarkMode() ? 'dark' : 'light') : theme), []);
    const [currentTheme, setCurrentTheme] = React.useState(initialTheme);
    const prevTheme = usePrevious(currentTheme);

    useTheme(currentTheme === 'light' ? LIGHT_THEME : DARK_THEME);

    React.useEffect(() => {
        if (theme !== 'auto') {
            return;
        }

        const media = window.matchMedia('(prefers-color-scheme: dark)');
        const handler = (e: MediaQueryListEvent) => {
            setCurrentTheme(e.matches ? 'dark' : 'light');
        };

        media.addEventListener('change', handler);
        return () => media.removeEventListener('change', handler);
    }, []);

    React.useEffect(() => {
        if (currentTheme !== prevTheme) {
            onSwitchTheme && onSwitchTheme(currentTheme);
        }
    }, [currentTheme]);

    React.useEffect(() => {
        if (theme !== currentTheme) {
            setCurrentTheme(theme);
        }
    }, [theme]);

    return {
        currentTheme,
        setCurrentTheme,
    };
};
