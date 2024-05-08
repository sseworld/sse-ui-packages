/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import * as React from 'react';
import { ScrollMode } from '../structs/ScrollMode';
import { type Rect } from '../types/Rect';

export const buildContainerStyles = (totalSize: Rect, scrollMode: ScrollMode): React.CSSProperties => {
    switch (scrollMode) {
        case ScrollMode.Horizontal:
            return {
                position: 'relative',
                height: '100%',
                width: `${totalSize.width}px`,
            };
        case ScrollMode.Vertical:
        default:
            return {
                position: 'relative',
                height: `${totalSize.height}px`,
                width: '100%',
            };
    }
};
