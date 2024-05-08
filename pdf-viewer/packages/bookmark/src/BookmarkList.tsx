/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import { type PdfJs, type Store } from '@sse-ui/pdf-core';
import * as React from 'react';
import { BookmarkItem } from './BookmarkItem';
import { type IsBookmarkExpanded } from './types/IsBookmarkExpanded';
import { type RenderBookmarkItem } from './types/RenderBookmarkItemProps';
import { type StoreProps } from './types/StoreProps';

export const BookmarkList: React.FC<{
    bookmarks: PdfJs.Outline[];
    depth: number;
    doc: PdfJs.PdfDocument;
    isBookmarkExpanded?: IsBookmarkExpanded;
    isRoot: boolean;
    pathFromRoot: string;
    renderBookmarkItem?: RenderBookmarkItem;
    store: Store<StoreProps>;
}> = ({ bookmarks, depth = 0, doc, isBookmarkExpanded, isRoot, pathFromRoot, renderBookmarkItem, store }) => (
    <ul className="rpv-bookmark__list" role={isRoot ? 'tree' : 'group'} tabIndex={-1}>
        {bookmarks.map((bookmark, index) => (
            <BookmarkItem
                bookmark={bookmark}
                depth={depth}
                doc={doc}
                index={index}
                isBookmarkExpanded={isBookmarkExpanded}
                key={index}
                numberOfSiblings={bookmarks.length}
                pathFromRoot={pathFromRoot}
                renderBookmarkItem={renderBookmarkItem}
                store={store}
            />
        ))}
    </ul>
);
