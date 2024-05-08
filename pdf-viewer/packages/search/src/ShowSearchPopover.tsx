/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import { Popover, Position, type Store, type Toggle } from '@sse-ui/pdf-core';
import * as React from 'react';
import { SearchPopover } from './SearchPopover';
import { ShowSearchPopoverButton } from './ShowSearchPopoverButton';
import { type RenderShowSearchPopoverProps } from './types/RenderShowSearchPopoverProps';
import { type StoreProps } from './types/StoreProps';

type RenderShowSearchPopover = (props: RenderShowSearchPopoverProps) => React.ReactElement;

export interface ShowSearchPopoverProps {
    children?: RenderShowSearchPopover;
}

export const ShowSearchPopover: React.FC<{
    children?: RenderShowSearchPopover;
    enableShortcuts: boolean;
    store: Store<StoreProps>;
}> = ({ children, enableShortcuts, store }) => {
    const defaultChildren = (props: RenderShowSearchPopoverProps) => (
        <ShowSearchPopoverButton enableShortcuts={enableShortcuts} store={store} {...props} />
    );
    const render = children || defaultChildren;

    return (
        <Popover
            ariaControlsSuffix="search"
            lockScroll={false}
            position={Position.BottomCenter}
            target={(toggle: Toggle) =>
                render({
                    onClick: toggle,
                })
            }
            content={(toggle: Toggle) => <SearchPopover store={store} onToggle={toggle} />}
            closeOnClickOutside={false}
            closeOnEscape={true}
        />
    );
};
