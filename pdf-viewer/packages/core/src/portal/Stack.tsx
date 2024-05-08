/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { StackContext } from './StackContext';

export const Stack: React.FC<{
    children: React.ReactNode;
}> = ({ children }) => {
    const { currentIndex, increaseNumStacks, decreaseNumStacks, numStacks } = React.useContext(StackContext);

    React.useEffect(() => {
        increaseNumStacks();
        return () => {
            decreaseNumStacks();
        };
    }, []);

    return ReactDOM.createPortal(
        <StackContext.Provider
            value={{
                currentIndex: currentIndex + 1,
                decreaseNumStacks,
                increaseNumStacks,
                numStacks,
            }}
        >
            {children}
        </StackContext.Provider>,
        document.body,
    );
};
