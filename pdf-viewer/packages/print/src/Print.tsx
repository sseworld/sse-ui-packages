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
import { PrintButton } from './PrintButton';
import { PrintStatus } from './structs/PrintStatus';
import { type RenderPrintProps } from './types/RenderPrintProps';
import { type StoreProps } from './types/StoreProps';

type RenderPrint = (props: RenderPrintProps) => React.ReactElement;

export interface PrintProps {
    children?: RenderPrint;
}

export const Print: React.FC<{
    children?: RenderPrint;
    enableShortcuts: boolean;
    store: Store<StoreProps>;
}> = ({ children, enableShortcuts, store }) => {
    const print = () => {
        store.update('printStatus', PrintStatus.CheckingPermission);
    };

    const render = children || PrintButton;

    return render({
        enableShortcuts,
        onClick: print,
    });
};
