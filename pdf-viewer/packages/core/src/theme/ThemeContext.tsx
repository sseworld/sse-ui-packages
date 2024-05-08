/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import * as React from 'react';

export enum TextDirection {
    RightToLeft = 'RTL',
    LeftToRight = 'LTR',
}

export interface ThemeContextProps {
    currentTheme: string;
    direction?: TextDirection;
    setCurrentTheme: (theme: string) => void;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
    currentTheme: 'light',
    direction: TextDirection.LeftToRight,
    setCurrentTheme: () => {},
});
