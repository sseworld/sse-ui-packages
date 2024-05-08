/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import * as React from 'react';
import { type HighlightArea } from './types/RenderHighlightsProps';

export const getCssProperties = (area: HighlightArea): React.CSSProperties => {
    return {
        left: `${area.left}%`,
        top: `${area.top}%`,
        height: `${area.height}%`,
        width: `${area.width}%`,
    };
};
