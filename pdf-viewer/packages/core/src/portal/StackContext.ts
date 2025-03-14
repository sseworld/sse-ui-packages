/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import * as React from 'react';

export const StackContext = React.createContext<{
    currentIndex: number;
    decreaseNumStacks: () => void;
    increaseNumStacks: () => void;
    numStacks: number;
}>({
    currentIndex: 0,
    decreaseNumStacks: () => {},
    increaseNumStacks: () => {},
    numStacks: 0,
});
