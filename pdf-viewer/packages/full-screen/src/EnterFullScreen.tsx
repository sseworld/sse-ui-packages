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
import { EnterFullScreenButton } from './EnterFullScreenButton';
import { ExitFullScreenButtonWithTooltip } from './ExitFullScreenButtonWithTooltip';
import { type StoreProps } from './types/StoreProps';
import { useEnterFullScreen } from './useEnterFullScreen';

export interface RenderEnterFullScreenProps {
    onClick(): void;
}

type RenderEnterFullScreen = (props: RenderEnterFullScreenProps) => React.ReactElement;

export interface EnterFullScreenProps {
    children?: RenderEnterFullScreen;
}

export const EnterFullScreen: React.FC<{
    children?: RenderEnterFullScreen;
    enableShortcuts: boolean;
    getFullScreenTarget(pagesContainer: HTMLElement): HTMLElement;
    store: Store<StoreProps>;
}> = ({ children, enableShortcuts, getFullScreenTarget, store }) => {
    const { enterFullScreen, exitFullScreen, isFullScreen } = useEnterFullScreen(getFullScreenTarget, store);

    const defaultChildren = (props: RenderEnterFullScreenProps) =>
        isFullScreen ? (
            <ExitFullScreenButtonWithTooltip onClick={props.onClick} />
        ) : (
            <EnterFullScreenButton enableShortcuts={enableShortcuts} onClick={props.onClick} />
        );
    const render = children || defaultChildren;

    return render({
        onClick: isFullScreen ? exitFullScreen : enterFullScreen,
    });
};
