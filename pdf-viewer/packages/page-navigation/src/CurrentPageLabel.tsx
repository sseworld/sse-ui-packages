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
import { FetchLabels } from './FetchLabels';
import { type StoreProps } from './types/StoreProps';
import { useCurrentPage } from './useCurrentPage';
import { useDocument } from './useDocument';
import { useNumberOfPages } from './useNumberOfPages';

export interface RenderCurrentPageLabelProps {
    currentPage: number;
    numberOfPages: number;
    pageLabel: string;
}

type RenderCurrentPageLabel = (props: RenderCurrentPageLabelProps) => React.ReactElement;

export interface CurrentPageLabelProps {
    children?: RenderCurrentPageLabel;
}

export const CurrentPageLabel: React.FC<{
    children?: RenderCurrentPageLabel;
    store: Store<StoreProps>;
}> = ({ children, store }) => {
    const currentDoc = useDocument(store);
    const { currentPage } = useCurrentPage(store);
    const { numberOfPages } = useNumberOfPages(store);

    const defaultChildren = (props: RenderCurrentPageLabelProps) => <>{props.currentPage + 1}</>;
    const render = children || defaultChildren;

    return currentDoc ? (
        <FetchLabels doc={currentDoc}>
            {(labels) => {
                // Check the value of `numberOfPages` to make sure the document is loaded
                const pageLabel = labels.length === numberOfPages && numberOfPages > 0 ? labels[currentPage] : '';
                return render({
                    currentPage,
                    numberOfPages,
                    pageLabel,
                });
            }}
        </FetchLabels>
    ) : (
        <></>
    );
};
