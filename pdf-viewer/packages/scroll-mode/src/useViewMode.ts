/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import { ViewMode, type Store, type StoreHandler } from '@sse-ui/pdf-core';
import * as React from 'react';
import { type StoreProps } from './types/StoreProps';

export const useViewMode = (
    store: Store<StoreProps>,
): {
    viewMode: ViewMode;
} => {
    const [viewMode, setViewMode] = React.useState(store.get('viewMode') || ViewMode.SinglePage);

    const handleViewModeChanged: StoreHandler<ViewMode> = (currentViewMode: ViewMode) => {
        setViewMode(currentViewMode);
    };

    React.useEffect(() => {
        store.subscribe('viewMode', handleViewModeChanged);

        return (): void => {
            store.unsubscribe('viewMode', handleViewModeChanged);
        };
    }, []);

    return { viewMode };
};
