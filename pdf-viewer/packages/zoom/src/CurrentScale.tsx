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
import { type StoreProps } from './types/StoreProps';
import { useZoom } from './useZoom';

export interface RenderCurrentScaleProps {
    scale: number;
}

type RenderCurrentScale = (props: RenderCurrentScaleProps) => React.ReactElement;

export interface CurrentScaleProps {
    children?: RenderCurrentScale;
}

export const CurrentScale: React.FC<{
    children?: RenderCurrentScale;
    store: Store<StoreProps>;
}> = ({ children, store }) => {
    const { scale } = useZoom(store);

    const defaultChildren = (props: RenderCurrentScaleProps) => <>{`${Math.round(props.scale * 100)}%`}</>;
    const render = children || defaultChildren;

    return render({ scale });
};
