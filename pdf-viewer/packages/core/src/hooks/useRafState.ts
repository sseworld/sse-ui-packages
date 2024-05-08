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

export const useRafState = <T>(initialState: T | (() => T)): [T, React.Dispatch<React.SetStateAction<T>>] => {
    const isMounted = useIsMounted();
    const rafRef = React.useRef(0);
    const [state, setState] = React.useState(initialState);

    const setRafState = React.useCallback((value: T | ((prevState: T) => T)) => {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
            isMounted.current && setState(value);
        });
    }, []);

    React.useEffect(() => {
        return () => {
            cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return [state, setRafState];
};
