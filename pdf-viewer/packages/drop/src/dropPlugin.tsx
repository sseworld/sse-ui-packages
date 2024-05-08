/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import { type Plugin, type RenderViewer, type Slot } from '@sse-ui/pdf-core';
import * as React from 'react';
import { DropArea } from './DropArea';

export const dropPlugin = (): Plugin => {
    const renderViewer = (props: RenderViewer): Slot => {
        const { slot } = props;

        if (slot.attrs) {
            const styles = slot.attrs && slot.attrs.style ? slot.attrs.style : {};
            const updateStyle: React.CSSProperties = {
                ...styles,
                ...{
                    height: '100%',
                    position: 'relative',
                    width: '100%',
                },
            };
            slot.attrs.style = updateStyle;
        }

        slot.children = (
            <>
                <DropArea containerRef={props.containerRef} openFile={props.openFile} />
                {slot.children}
            </>
        );

        return slot;
    };

    return {
        renderViewer,
    };
};
