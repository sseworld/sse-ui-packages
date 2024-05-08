/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import * as React from 'react';
import { getCssProperties } from './transformArea';
import { type HighlightArea } from './types/HighlightArea';

export const HighlightRect: React.FC<{
    area: HighlightArea;
    rotation: number;
}> = ({ area, rotation }) => <div className="rpv-highlight__selected-text" style={getCssProperties(area, rotation)} />;
