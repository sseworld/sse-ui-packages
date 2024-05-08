/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { ScrollMode, ViewMode, type Store } from '@sse-ui/pdf-core';
import { type StoreProps } from './types/StoreProps';

export const switchViewMode = (store: Store<StoreProps>, viewMode: ViewMode) => {
    store.get('switchViewMode')(viewMode);
    // Get the current scroll mode
    const currentScrollMode = store.get('scrollMode');
    if (
        (currentScrollMode === ScrollMode.Horizontal || currentScrollMode === ScrollMode.Wrapped) &&
        viewMode !== ViewMode.SinglePage
    ) {
        store.get('switchScrollMode')(ScrollMode.Vertical);
    }
};
