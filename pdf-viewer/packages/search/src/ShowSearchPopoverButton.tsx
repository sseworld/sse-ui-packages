/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import { MinimalButton, Position, Tooltip, isMac, type Store, type StoreHandler } from '@sse-ui/pdf-core';
import * as React from 'react';
import { ShowSearchPopoverDecorator } from './ShowSearchPopoverDecorator';
import { type StoreProps } from './types/StoreProps';

export const ShowSearchPopoverButton: React.FC<{
    enableShortcuts: boolean;
    store: Store<StoreProps>;
    onClick(): void;
}> = ({ enableShortcuts, store, onClick }) => {
    const ariaKeyShortcuts = enableShortcuts ? (isMac() ? 'Meta+F' : 'Ctrl+F') : '';

    const handleShortcutsPressed: StoreHandler<boolean> = (areShortcutsPressed: boolean) => {
        if (areShortcutsPressed) {
            onClick();
        }
    };

    React.useEffect(() => {
        store.subscribe('areShortcutsPressed', handleShortcutsPressed);

        return () => {
            store.unsubscribe('areShortcutsPressed', handleShortcutsPressed);
        };
    }, []);

    return (
        <ShowSearchPopoverDecorator onClick={onClick}>
            {(p) => (
                <Tooltip
                    ariaControlsSuffix="search-popover"
                    position={Position.BottomCenter}
                    target={
                        <MinimalButton
                            ariaKeyShortcuts={ariaKeyShortcuts}
                            ariaLabel={p.label}
                            testId="search__popover-button"
                            onClick={onClick}
                        >
                            {p.icon}
                        </MinimalButton>
                    }
                    content={() => p.label}
                />
            )}
        </ShowSearchPopoverDecorator>
    );
};
