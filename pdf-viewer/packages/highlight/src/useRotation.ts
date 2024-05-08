/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import { type Store, type StoreHandler } from '@sse-ui/pdf-core';
import * as React from 'react';
import { type StoreProps } from './types/StoreProps';

export const useRotation = (store: Store<StoreProps>): { rotation: number } => {
    const [rotation, setRotation] = React.useState(store.get('rotation') || 0);

    const handleRotationChanged: StoreHandler<number> = (currentRotation: number) => setRotation(currentRotation);

    React.useEffect(() => {
        store.subscribe('rotation', handleRotationChanged);

        return () => {
            store.unsubscribe('rotation', handleRotationChanged);
        };
    }, []);

    return { rotation };
};
