/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import { Modal, type Store, type Toggle } from '@sse-ui/pdf-core';
import * as React from 'react';
import { PropertiesModal } from './PropertiesModal';
import { ShowPropertiesButton } from './ShowPropertiesButton';
import { type RenderShowPropertiesProps } from './types/RenderShowPropertiesProps';
import { type StoreProps } from './types/StoreProps';
import { useDocument } from './useDocument';

type RenderShowProperties = (props: RenderShowPropertiesProps) => React.ReactElement;

export interface ShowPropertiesProps {
    children?: RenderShowProperties;
}

export const ShowProperties: React.FC<{
    children?: RenderShowProperties;
    store: Store<StoreProps>;
}> = ({ children, store }) => {
    const { currentDoc } = useDocument(store);
    const fileName = store.get('fileName') || '';

    const defaultChildren = (props: RenderShowPropertiesProps) => <ShowPropertiesButton {...props} />;
    const render = children || defaultChildren;

    return currentDoc ? (
        <Modal
            ariaControlsSuffix="properties"
            target={(toggle: Toggle) =>
                render({
                    onClick: toggle,
                })
            }
            content={(toggle: Toggle) => <PropertiesModal doc={currentDoc} fileName={fileName} onToggle={toggle} />}
            closeOnClickOutside={true}
            closeOnEscape={true}
        />
    ) : (
        <></>
    );
};
