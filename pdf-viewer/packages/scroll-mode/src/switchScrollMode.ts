/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { ScrollMode, ViewMode, type Store } from '@sse-ui/pdf-core';
import { type StoreProps } from './types/StoreProps';

export const switchScrollMode = (store: Store<StoreProps>, scrollMode: ScrollMode) => {
    store.get('switchScrollMode')(scrollMode);
    // Get the current viewmode
    const currentViewMode = store.get('viewMode');
    if (
        (scrollMode === ScrollMode.Horizontal || scrollMode === ScrollMode.Wrapped) &&
        currentViewMode !== ViewMode.SinglePage
    ) {
        store.get('switchViewMode')(ViewMode.SinglePage);
    }
};
