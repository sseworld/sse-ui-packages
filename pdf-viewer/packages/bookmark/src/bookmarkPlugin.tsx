/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import { createStore, type Plugin, type PluginFunctions, type PluginOnDocumentLoad } from '@sse-ui/pdf-core';
import * as React from 'react';
import { BookmarkListWithStore } from './BookmarkListWithStore';
import { type IsBookmarkExpanded } from './types/IsBookmarkExpanded';
import { type RenderBookmarkItem } from './types/RenderBookmarkItemProps';
import { type StoreProps } from './types/StoreProps';

export interface BookmarksProps {
    isBookmarkExpanded?: IsBookmarkExpanded;
    renderBookmarkItem?: RenderBookmarkItem;
}

export interface BookmarkPlugin extends Plugin {
    Bookmarks: (props?: BookmarksProps) => React.ReactElement;
}

export const bookmarkPlugin = (): BookmarkPlugin => {
    const store = React.useMemo(
        () =>
            createStore<StoreProps>({
                bookmarkExpandedMap: new Map(),
            }),
        [],
    );

    const BookmarksDecorator = (props?: BookmarksProps) => (
        <BookmarkListWithStore
            isBookmarkExpanded={props?.isBookmarkExpanded}
            renderBookmarkItem={props?.renderBookmarkItem}
            store={store}
        />
    );

    return {
        install: (pluginFunctions: PluginFunctions) => {
            store.update('jumpToDestination', pluginFunctions.jumpToDestination);
        },
        onDocumentLoad: (props: PluginOnDocumentLoad) => {
            store.update('doc', props.doc);
        },
        Bookmarks: BookmarksDecorator,
    };
};
