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
import { GoToNextPageButton } from './GoToNextPageButton';
import { StoreProps } from './types/StoreProps';
import { type RenderGoToPage, type RenderGoToPageProps } from './types/index';
import { useCurrentPage } from './useCurrentPage';
import { useNumberOfPages } from './useNumberOfPages';

export const GoToNextPage: React.FC<{
    children?: RenderGoToPage;
    store: Store<StoreProps>;
}> = ({ children, store }) => {
    const { currentPage } = useCurrentPage(store);
    const { numberOfPages } = useNumberOfPages(store);

    const goToNextPage = () => {
        const jumpToNextPage = store.get('jumpToNextPage');
        if (jumpToNextPage) {
            jumpToNextPage();
        }
    };

    const defaultChildren = (props: RenderGoToPageProps) => (
        <GoToNextPageButton onClick={props.onClick} isDisabled={props.isDisabled} />
    );

    const render = children || defaultChildren;
    return render({
        isDisabled: currentPage + 1 >= numberOfPages,
        onClick: goToNextPage,
    });
};
