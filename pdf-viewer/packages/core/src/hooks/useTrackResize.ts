/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import * as React from 'react';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayoutEffect';

interface UseTrackResizeProps {
    targetRef: React.MutableRefObject<HTMLDivElement>;
    onResize(target: Element): void;
}

export const useTrackResize = ({ targetRef, onResize }: UseTrackResizeProps) => {
    useIsomorphicLayoutEffect(() => {
        const io = new ResizeObserver((entries) => {
            entries.forEach((entry) => {
                onResize(entry.target);
            });
        });
        const container = targetRef.current;
        if (!container) {
            return;
        }
        io.observe(container);

        return (): void => {
            io.unobserve(container);
        };
    }, []);
};
