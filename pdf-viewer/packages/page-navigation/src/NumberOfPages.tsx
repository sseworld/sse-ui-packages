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
import { useNumberOfPages } from './useNumberOfPages';

export interface RenderNumberOfPagesProps {
    numberOfPages: number;
}

export type RenderNumberOfPages = (props: RenderNumberOfPagesProps) => React.ReactElement;

export interface NumberOfPagesProps {
    children?: RenderNumberOfPages;
}

export const NumberOfPages: React.FC<{
    children?: RenderNumberOfPages;
    store: Store<StoreProps>;
}> = ({ children, store }) => {
    const { numberOfPages } = useNumberOfPages(store);
    return children ? children({ numberOfPages }) : <>{numberOfPages}</>;
};
