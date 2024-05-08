/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import { RotateDirection, type Store } from '@sse-ui/pdf-core';
import * as React from 'react';
import { type RenderRotatePageProps } from './types/RenderRotatePageProps';
import { type StoreProps } from './types/StoreProps';

type RenderRotatePage = (props: RenderRotatePageProps) => React.ReactElement;

export interface RotatePageProps {
    children: RenderRotatePage;
}

export const RotatePage: React.FC<{
    children: RenderRotatePage;
    store: Store<StoreProps>;
}> = ({ children, store }) => {
    const onRotatePage = (pageIndex: number, direction: RotateDirection) => {
        const rotatePage = store.get('rotatePage');
        if (rotatePage) {
            rotatePage(pageIndex, direction);
        }
    };

    return children({
        onRotatePage,
    });
};
