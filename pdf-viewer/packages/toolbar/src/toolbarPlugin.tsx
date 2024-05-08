/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import { type Plugin } from '@sse-ui/pdf-core';
import { fullScreenPlugin, type FullScreenPlugin, type FullScreenPluginProps } from '@sse-ui/pdf-full-screen';
import { getFilePlugin, type GetFilePlugin, type GetFilePluginProps } from '@sse-ui/pdf-get-file';
import { openPlugin, type OpenPlugin, type OpenPluginProps } from '@sse-ui/pdf-open';
import {
    pageNavigationPlugin,
    type PageNavigationPlugin,
    type PageNavigationPluginProps,
} from '@sse-ui/pdf-page-navigation';
import { printPlugin, type PrintPlugin, type PrintPluginProps } from '@sse-ui/pdf-print';
import { propertiesPlugin, type PropertiesPlugin } from '@sse-ui/pdf-properties';
import { rotatePlugin, type RotatePlugin } from '@sse-ui/pdf-rotate';
import { scrollModePlugin, type ScrollModePlugin } from '@sse-ui/pdf-scroll-mode';
import { searchPlugin, type SearchPlugin, type SearchPluginProps } from '@sse-ui/pdf-search';
import {
    selectionModePlugin,
    type SelectionModePlugin,
    type SelectionModePluginProps,
} from '@sse-ui/pdf-selection-mode';
import { themePlugin, type ThemePlugin } from '@sse-ui/pdf-theme';
import { zoomPlugin, type ZoomPlugin, type ZoomPluginProps } from '@sse-ui/pdf-zoom';
import * as React from 'react';
import { Toolbar, ToolbarProps } from './Toolbar';
import { renderDefaultToolbar } from './renderDefaultToolbar';
import { type ToolbarSlot } from './types/ToolbarSlot';
import { type TransformToolbarSlot } from './types/TransformToolbarSlot';

export interface ToolbarPlugin extends Plugin {
    renderDefaultToolbar: (
        transformToolbarSlot: TransformToolbarSlot,
    ) => (defaultToolbarSlot: ToolbarSlot) => React.ReactElement;
    Toolbar: (props: ToolbarProps) => React.ReactElement;
    // Plugins instance
    readonly fullScreenPluginInstance: FullScreenPlugin;
    readonly getFilePluginInstance: GetFilePlugin;
    readonly openPluginInstance: OpenPlugin;
    readonly pageNavigationPluginInstance: PageNavigationPlugin;
    readonly printPluginInstance: PrintPlugin;
    readonly propertiesPluginInstance: PropertiesPlugin;
    readonly rotatePluginInstance: RotatePlugin;
    readonly scrollModePluginInstance: ScrollModePlugin;
    readonly searchPluginInstance: SearchPlugin;
    readonly selectionModePluginInstance: SelectionModePlugin;
    readonly themePluginInstance: ThemePlugin;
    readonly zoomPluginInstance: ZoomPlugin;
}

export interface ToolbarPluginProps {
    fullScreenPlugin?: FullScreenPluginProps;
    getFilePlugin?: GetFilePluginProps;
    openPlugin?: OpenPluginProps;
    pageNavigationPlugin?: PageNavigationPluginProps;
    printPlugin?: PrintPluginProps;
    searchPlugin?: SearchPluginProps;
    selectionModePlugin?: SelectionModePluginProps;
    zoomPlugin?: ZoomPluginProps;
}

export const toolbarPlugin = (props?: ToolbarPluginProps): ToolbarPlugin => {
    const fullScreenPluginInstance = fullScreenPlugin(props ? props.fullScreenPlugin : {});
    const getFilePluginInstance = getFilePlugin(props ? props.getFilePlugin : {});
    const openPluginInstance = openPlugin(props ? props.openPlugin : {});
    const pageNavigationPluginInstance = pageNavigationPlugin(props ? props.pageNavigationPlugin : {});
    const printPluginInstance = printPlugin(props ? props.printPlugin : {});
    const propertiesPluginInstance = propertiesPlugin();
    const rotatePluginInstance = rotatePlugin();
    const scrollModePluginInstance = scrollModePlugin();
    const searchPluginInstance = searchPlugin(props ? props.searchPlugin : {});
    const selectionModePluginInstance = selectionModePlugin(props ? props.selectionModePlugin : {});
    const themePluginInstance = themePlugin();
    const zoomPluginInstance = zoomPlugin(props ? props.zoomPlugin : {});

    const plugins = [
        fullScreenPluginInstance,
        getFilePluginInstance,
        openPluginInstance,
        pageNavigationPluginInstance,
        printPluginInstance,
        propertiesPluginInstance,
        rotatePluginInstance,
        scrollModePluginInstance,
        searchPluginInstance,
        selectionModePluginInstance,
        themePluginInstance,
        zoomPluginInstance,
    ];

    const ToolbarDecorator = React.useCallback((props: ToolbarProps) => {
        const { EnterFullScreen, EnterFullScreenMenuItem } = fullScreenPluginInstance;
        const { Download, DownloadMenuItem } = getFilePluginInstance;
        const { Open, OpenMenuItem } = openPluginInstance;
        const {
            CurrentPageInput,
            CurrentPageLabel,
            GoToFirstPage,
            GoToFirstPageMenuItem,
            GoToLastPage,
            GoToLastPageMenuItem,
            GoToNextPage,
            GoToNextPageMenuItem,
            GoToPreviousPage,
            GoToPreviousPageMenuItem,
            NumberOfPages,
        } = pageNavigationPluginInstance;
        const { Print, PrintMenuItem } = printPluginInstance;
        const { ShowProperties, ShowPropertiesMenuItem } = propertiesPluginInstance;
        const { Rotate, RotateBackwardMenuItem, RotateForwardMenuItem } = rotatePluginInstance;
        const { SwitchScrollMode, SwitchScrollModeMenuItem, SwitchViewMode, SwitchViewModeMenuItem } =
            scrollModePluginInstance;
        const { Search, ShowSearchPopover } = searchPluginInstance;
        const { SwitchSelectionMode, SwitchSelectionModeMenuItem } = selectionModePluginInstance;
        const { SwitchTheme, SwitchThemeMenuItem } = themePluginInstance;
        const { CurrentScale, Zoom, ZoomIn, ZoomInMenuItem, ZoomOut, ZoomOutMenuItem } = zoomPluginInstance;

        return (
            <Toolbar
                {...props}
                slot={{
                    CurrentPageInput,
                    CurrentPageLabel,
                    CurrentScale,
                    Download,
                    DownloadMenuItem,
                    EnterFullScreen,
                    EnterFullScreenMenuItem,
                    GoToFirstPage,
                    GoToFirstPageMenuItem,
                    GoToLastPage,
                    GoToLastPageMenuItem,
                    GoToNextPage,
                    GoToNextPageMenuItem,
                    GoToPreviousPage,
                    GoToPreviousPageMenuItem,
                    NumberOfPages,
                    Open,
                    OpenMenuItem,
                    Print,
                    PrintMenuItem,
                    Rotate,
                    RotateBackwardMenuItem,
                    RotateForwardMenuItem,
                    Search,
                    ShowProperties,
                    ShowPropertiesMenuItem,
                    ShowSearchPopover,
                    SwitchScrollMode,
                    SwitchScrollModeMenuItem,
                    SwitchSelectionMode,
                    SwitchSelectionModeMenuItem,
                    SwitchViewMode,
                    SwitchViewModeMenuItem,
                    SwitchTheme,
                    SwitchThemeMenuItem,
                    Zoom,
                    ZoomIn,
                    ZoomInMenuItem,
                    ZoomOut,
                    ZoomOutMenuItem,
                }}
            />
        );
    }, []);

    return {
        // Plugin instances
        fullScreenPluginInstance,
        getFilePluginInstance,
        openPluginInstance,
        pageNavigationPluginInstance,
        printPluginInstance,
        propertiesPluginInstance,
        rotatePluginInstance,
        scrollModePluginInstance,
        searchPluginInstance,
        selectionModePluginInstance,
        themePluginInstance,
        zoomPluginInstance,
        dependencies: plugins,
        renderDefaultToolbar,
        Toolbar: ToolbarDecorator,
    };
};
