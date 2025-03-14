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
import { OpenButton } from './OpenButton';
import { type RenderOpenProps } from './types/RenderOpenProps';
import { type StoreProps } from './types/StoreProps';

type RenderOpen = (props: RenderOpenProps) => React.ReactElement;

export interface OpenProps {
    children?: RenderOpen;
}

export const Open: React.FC<{
    children?: RenderOpen;
    enableShortcuts: boolean;
    store: Store<StoreProps>;
}> = ({ children, enableShortcuts, store }) => {
    const handleOpenFiles = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const files = e.target.files;
        if (!files || !files.length) {
            return;
        }
        const openFile = store.get('openFile');
        if (openFile) {
            openFile(files[0]);
        }
    };

    const defaultChildren = (props: RenderOpenProps) => (
        <OpenButton enableShortcuts={enableShortcuts} store={store} onClick={props.onClick} />
    );
    const render = children || defaultChildren;

    return render({
        onClick: handleOpenFiles,
    });
};
