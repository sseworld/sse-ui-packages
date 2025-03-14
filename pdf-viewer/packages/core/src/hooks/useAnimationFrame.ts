/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import * as React from 'react';

export const useAnimationFrame = <T extends unknown[]>(
    callback: (...args: T) => void,
    recurring: boolean = false,
    deps: unknown[],
): [(...args: T) => void] => {
    const callbackRef = React.useRef(callback);
    const idRef = React.useRef(-1);

    callbackRef.current = callback;

    const start = React.useCallback(
        (...args: T) => {
            cancelAnimationFrame(idRef.current);
            idRef.current = requestAnimationFrame(() => {
                callback(...args);
                if (recurring) {
                    start(...args);
                }
            });
        },
        [...deps, recurring],
    );

    const stop = React.useCallback(() => {
        cancelAnimationFrame(idRef.current);
    }, []);

    React.useEffect(() => () => stop(), []);

    return [start];
};
