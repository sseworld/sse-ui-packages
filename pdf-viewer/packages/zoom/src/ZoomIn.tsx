/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import { type Store } from '@sse-ui/pdf-core';
import * as React from 'react';
import { ZoomInButton } from './ZoomInButton';
import { type RenderZoomInProps } from './types/RenderZoomInProps';
import { type StoreProps } from './types/StoreProps';
import { useZoom } from './useZoom';
import { increase } from './zoomingLevel';

type RenderZoomIn = (props: RenderZoomInProps) => React.ReactElement;

export interface ZoomInProps {
    children?: RenderZoomIn;
}

export const ZoomIn: React.FC<{
    children?: RenderZoomIn;
    enableShortcuts: boolean;
    store: Store<StoreProps>;
}> = ({ children, enableShortcuts, store }) => {
    const { scale } = useZoom(store);

    const zoomIn = () => {
        const zoom = store.get('zoom');
        if (zoom) {
            const newLevel = increase(scale);
            zoom(newLevel);
        }
    };

    const render = children || ZoomInButton;

    return render({
        enableShortcuts,
        onClick: zoomIn,
    });
};
