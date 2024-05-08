/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { type Offset } from '../types/Offset';
import { type Rect } from '../types/Rect';
import { type ItemMeasurement } from './ItemMeasurement';

const ZERO_OFFSET: Offset = {
    left: 0,
    top: 0,
};

export const measureSinglePage = (numberOfItems: number, parentRect: Rect, sizes: Rect[]): ItemMeasurement[] => {
    const measurements: ItemMeasurement[] = [];

    for (let i = 0; i < numberOfItems; i++) {
        const size = {
            height: Math.max(parentRect.height, sizes[i].height),
            width: Math.max(parentRect.width, sizes[i].width),
        };
        const start: Offset = i === 0 ? ZERO_OFFSET : measurements[i - 1].end;
        const end: Offset = {
            left: start.left + size.width,
            top: start.top + size.height,
        };
        measurements[i] = {
            index: i,
            start,
            size,
            end,
            visibility: -1,
        };
    }

    return measurements;
};
