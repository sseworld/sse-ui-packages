/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import * as React from 'react';
import { useEscapeStack } from './useEscapeStack';

export const PopoverOverlay: React.FC<{
    children: React.ReactNode;
    closeOnEscape: boolean;
    onClose(): void;
}> = ({ children, closeOnEscape, onClose }) => {
    const containerRef = React.useRef<HTMLDivElement>();

    useEscapeStack(() => {
        if (closeOnEscape) {
            onClose();
        }
    });

    return (
        <div className="rpv-core__popover-overlay" ref={containerRef}>
            {children}
        </div>
    );
};
