/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import * as React from 'react';

export const useQueue = <T>(maxLength: number) => {
    const queueRef = React.useRef<T[]>([]);

    // Get the first item of queue
    const dequeue = (): T | null => {
        const queue = queueRef.current;
        const size = queue.length;
        if (size === 0) {
            return null;
        }
        const firstItem = queue.shift();
        queueRef.current = queue;
        return firstItem || null;
    };

    // Add an item to the queue
    const enqueue = (item: T): void => {
        const queue = queueRef.current;
        if (queue.length + 1 > maxLength) {
            queue.pop();
        }
        queueRef.current = [item].concat(queue);
    };

    const map = <V>(transformer: (item: T) => V): V[] => {
        return queueRef.current.map((item) => transformer(item));
    };

    React.useEffect(() => {
        return () => {
            // Clear the queue
            queueRef.current = [];
        };
    }, []);

    return {
        dequeue,
        enqueue,
        map,
    };
};
