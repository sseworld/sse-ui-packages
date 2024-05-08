/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import * as React from 'react';

export interface Attr extends React.HTMLAttributes<HTMLDivElement> {
    'data-testid'?: string;
    ref?: React.MutableRefObject<HTMLDivElement | null>;
}

export interface Slot {
    attrs?: Attr;
    children?: React.ReactNode;
    subSlot?: Slot;
}
