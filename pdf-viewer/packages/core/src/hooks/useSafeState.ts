/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import * as React from 'react';
import { useIsMounted } from './useIsMounted';

export const useSafeState = <T>(initialState: T | (() => T)): [T, React.Dispatch<React.SetStateAction<T>>] => {
    const [state, setState] = React.useState(initialState);
    const useIsMountedRef = useIsMounted();

    const setSafeState = React.useCallback(
        (newState: React.SetStateAction<T>) => {
            if (useIsMountedRef.current) {
                setState(newState);
            }
        },
        [useIsMountedRef.current],
    );

    return [state, setSafeState];
};
