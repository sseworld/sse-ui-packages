/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import * as React from 'react';
import { StackContext } from './StackContext';

export const useEscapeStack = (handler: () => void): void => {
    const stackContext = React.useContext(StackContext);

    const keyUpHandler = React.useCallback(
        (e: KeyboardEvent): void => {
            if (e.key === 'Escape' && stackContext.currentIndex === stackContext.numStacks) {
                handler();
            }
        },
        [stackContext.currentIndex, stackContext.numStacks],
    );

    React.useEffect(() => {
        document.addEventListener('keyup', keyUpHandler);
        return (): void => {
            document.removeEventListener('keyup', keyUpHandler);
        };
    }, [stackContext.currentIndex, stackContext.numStacks]);
};
