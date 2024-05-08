/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import * as React from 'react';

export const useDebounceCallback = <T extends unknown[]>(callback: (...args: T) => void, wait: number) => {
    const timeout = React.useRef<ReturnType<typeof setTimeout>>();

    const cleanup = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
    };

    React.useEffect(() => {
        return () => cleanup();
    }, []);

    return React.useCallback(
        (...args: T) => {
            cleanup();
            timeout.current = setTimeout(() => {
                callback(...args);
            }, wait);
        },
        [callback, wait],
    );
};
