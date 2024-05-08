/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import { FullScreenMode, Spinner, type Store } from '@sse-ui/pdf-core';
import * as React from 'react';
import { type StoreProps } from './types/StoreProps';
import { type Zoom } from './types/Zoom';

export const FullScreenModeTracker: React.FC<{
    store: Store<StoreProps>;
    onEnterFullScreen: (zoom: Zoom) => void;
    onExitFullScreen: (zoom: Zoom) => void;
}> = ({ store, onEnterFullScreen, onExitFullScreen }) => {
    const [fullScreenMode, setFullScreenMode] = React.useState(store.get('fullScreenMode'));

    const handleFullScreenMode = React.useCallback((fullScreenMode: FullScreenMode) => {
        setFullScreenMode(fullScreenMode);
    }, []);

    const handleEnteredFullScreen = () => {
        onEnterFullScreen(store.get('zoom'));
    };

    const handleExitedFullScreen = () => {
        onExitFullScreen(store.get('zoom'));
    };

    React.useEffect(() => {
        switch (fullScreenMode) {
            case FullScreenMode.Entered:
                handleEnteredFullScreen();
                break;
            case FullScreenMode.Exited:
                handleExitedFullScreen();
                break;
            default:
                break;
        }
    }, [fullScreenMode]);

    React.useEffect(() => {
        store.subscribe('fullScreenMode', handleFullScreenMode);

        return (): void => {
            store.unsubscribe('fullScreenMode', handleFullScreenMode);
        };
    }, []);

    return (
        fullScreenMode === FullScreenMode.Entering && (
            <div className="rpv-full-screen__overlay">
                <Spinner />
            </div>
        )
    );
};
