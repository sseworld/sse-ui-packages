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
import { type VisibilityChanged } from '../types/VisibilityChanged';

interface UseIntersectionObserverProps {
    once?: boolean;
    threshold?: number | number[];
    onVisibilityChanged(params: VisibilityChanged): void;
}

export const useIntersectionObserver = (props: UseIntersectionObserverProps) => {
    const containerRef = React.useRef<HTMLDivElement | null>(null);

    const { once, threshold, onVisibilityChanged } = props;

    useIsomorphicLayoutEffect(() => {
        const container = containerRef.current;
        if (!container) {
            return;
        }

        const intersectionTracker = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const isVisible = entry.isIntersecting;
                    const ratio = entry.intersectionRatio;
                    onVisibilityChanged({ isVisible, ratio });
                    if (isVisible && once) {
                        intersectionTracker.unobserve(container);
                        intersectionTracker.disconnect();
                    }
                });
            },
            {
                threshold: threshold || 0,
            },
        );
        intersectionTracker.observe(container);

        return (): void => {
            intersectionTracker.unobserve(container);
            intersectionTracker.disconnect();
        };
    }, []);

    return containerRef;
};
