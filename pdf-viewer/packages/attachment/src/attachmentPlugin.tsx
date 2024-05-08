/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import { createStore, type Plugin, type PluginOnDocumentLoad } from '@sse-ui/pdf-core';
import * as React from 'react';
import { AttachmentListWithStore } from './AttachmentListWithStore';
import { type StoreProps } from './types/StoreProps';

export interface AttachmentPlugin extends Plugin {
    Attachments: () => React.ReactElement;
}

export const attachmentPlugin = (): AttachmentPlugin => {
    const store = React.useMemo(() => createStore<StoreProps>({}), []);

    const AttachmentsDecorator = () => <AttachmentListWithStore store={store} />;

    return {
        onDocumentLoad: (props: PluginOnDocumentLoad) => {
            store.update('doc', props.doc);
        },
        Attachments: AttachmentsDecorator,
    };
};
