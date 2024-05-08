/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import * as React from 'react';
import { useQueue } from '../hooks/useQueue';
import { useStack } from '../hooks/useStack';
import { type Destination } from '../types/Destination';

const MAX_QUEUE_LENGTH = 50;

export const useDestination = ({ getCurrentPage }: { getCurrentPage: () => number }) => {
    const previousDestinations = useStack<Destination>(MAX_QUEUE_LENGTH);
    const nextDestinations = useQueue<Destination>(MAX_QUEUE_LENGTH);

    const getNextDestination = (): Destination | null => {
        const nextDest = nextDestinations.dequeue();
        if (nextDest) {
            previousDestinations.push(nextDest);
        }
        if (nextDest && nextDest.pageIndex === getCurrentPage()) {
            return getNextDestination();
        }
        return nextDest;
    };

    const getPreviousDestination = (): Destination | null => {
        const prevDest = previousDestinations.pop();
        if (prevDest) {
            nextDestinations.enqueue(prevDest);
        }
        if (prevDest && prevDest.pageIndex === getCurrentPage()) {
            return getPreviousDestination();
        }

        return prevDest;
    };

    const markVisitedDestination = React.useCallback((destination: Destination) => {
        previousDestinations.push(destination);
    }, []);

    return {
        getNextDestination,
        getPreviousDestination,
        markVisitedDestination,
    };
};
