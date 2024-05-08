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
import { type StoreProps } from './types/StoreProps';

export const useTriggerOpen = (
    store: Store<StoreProps>,
): {
    inputRef: React.MutableRefObject<HTMLInputElement>;
    openFile: () => void;
} => {
    const inputRef = React.useRef<HTMLInputElement>();

    const openFile = () => {
        const inputEle = inputRef.current;
        if (inputEle) {
            inputEle.click();
            if (store.get('triggerOpenFile')) {
                store.update('triggerOpenFile', false);
            }
        }
    };

    const handleOpenFileTriggered = (trigger: boolean) => {
        if (trigger) {
            openFile();
        }
    };

    React.useEffect(() => {
        store.subscribe('triggerOpenFile', handleOpenFileTriggered);

        return () => {
            store.unsubscribe('triggerOpenFile', handleOpenFileTriggered);
        };
    }, []);

    return {
        inputRef,
        openFile,
    };
};
