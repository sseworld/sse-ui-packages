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
import { GoToPreviousPageButton } from './GoToPreviousPageButton';
import { type StoreProps } from './types/StoreProps';
import { type RenderGoToPage, type RenderGoToPageProps } from './types/index';
import { useCurrentPage } from './useCurrentPage';

export const GoToPreviousPage: React.FC<{
    children?: RenderGoToPage;
    store: Store<StoreProps>;
}> = ({ store, children }) => {
    const { currentPage } = useCurrentPage(store);

    const goToPreviousPage = () => {
        const jumpToPreviousPage = store.get('jumpToPreviousPage');
        if (jumpToPreviousPage) {
            jumpToPreviousPage();
        }
    };

    const defaultChildren = (props: RenderGoToPageProps) => (
        <GoToPreviousPageButton isDisabled={props.isDisabled} onClick={props.onClick} />
    );
    const render = children || defaultChildren;

    return render({
        isDisabled: currentPage <= 0,
        onClick: goToPreviousPage,
    });
};
