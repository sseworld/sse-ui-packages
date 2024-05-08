/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { type Plugin } from '@sse-ui/pdf-core';
import {
    type EnterFullScreenMenuItemProps,
    type EnterFullScreenProps,
    type FullScreenPlugin,
    type FullScreenPluginProps,
} from '@sse-ui/pdf-full-screen';
import {
    type DownloadMenuItemProps,
    type DownloadProps,
    type GetFilePlugin,
    type GetFilePluginProps,
} from '@sse-ui/pdf-get-file';
import { type OpenPlugin, type OpenPluginProps, type OpenProps } from '@sse-ui/pdf-open';
import {
    type CurrentPageLabelProps,
    type GoToPageMenuItemProps,
    type GoToPageProps,
    type NumberOfPagesProps,
    type PageNavigationPlugin,
    type PageNavigationPluginProps,
} from '@sse-ui/pdf-page-navigation';
import { type PrintMenuItemProps, type PrintPlugin, type PrintPluginProps, type PrintProps } from '@sse-ui/pdf-print';
import {
    type PropertiesPlugin,
    type ShowPropertiesMenuItemProps,
    type ShowPropertiesProps,
} from '@sse-ui/pdf-properties';
import { type RotateDecoratorProps, type RotatePlugin, type RotateProps } from '@sse-ui/pdf-rotate';
import {
    type ScrollModePlugin,
    type SwitchScrollModeMenuItemProps,
    type SwitchScrollModeProps,
    type SwitchViewModeMenuItemProps,
    type SwitchViewModeProps,
} from '@sse-ui/pdf-scroll-mode';
import {
    type SearchPlugin,
    type SearchPluginProps,
    type SearchProps,
    type ShowSearchPopoverProps,
} from '@sse-ui/pdf-search';
import {
    type SelectionModePlugin,
    type SelectionModePluginProps,
    type SwitchSelectionModeMenuItemProps,
    type SwitchSelectionModeProps,
} from '@sse-ui/pdf-selection-mode';
import { type SwitchThemeMenuItemProps, type SwitchThemeProps, type ThemePlugin } from '@sse-ui/pdf-theme';
import {
    type CurrentScaleProps,
    type ZoomInProps,
    type ZoomMenuItemProps,
    type ZoomOutProps,
    type ZoomPlugin,
    type ZoomPluginProps,
    type ZoomProps,
} from '@sse-ui/pdf-zoom';
import * as React from 'react';

// Types
export interface ToolbarProps {
    children?: (toolbarSlot: ToolbarSlot) => React.ReactElement;
}

export interface ToolbarSlot {
    CurrentPageInput(): React.ReactElement;
    CurrentPageLabel(props: CurrentPageLabelProps): React.ReactElement;
    CurrentScale(props: CurrentScaleProps): React.ReactElement;
    GoToFirstPage(props: GoToPageProps): React.ReactElement;
    GoToFirstPageMenuItem(props: GoToPageMenuItemProps): React.ReactElement;
    GoToLastPage(props: GoToPageProps): React.ReactElement;
    GoToLastPageMenuItem(props: GoToPageMenuItemProps): React.ReactElement;
    GoToNextPage(props: GoToPageProps): React.ReactElement;
    GoToNextPageMenuItem(props: GoToPageMenuItemProps): React.ReactElement;
    GoToPreviousPage(props: GoToPageProps): React.ReactElement;
    GoToPreviousPageMenuItem(props: GoToPageMenuItemProps): React.ReactElement;
    NumberOfPages(props: NumberOfPagesProps): React.ReactElement;

    Download(props: DownloadProps): React.ReactElement;
    DownloadMenuItem(props: DownloadMenuItemProps): React.ReactElement;

    EnterFullScreen(props: EnterFullScreenProps): React.ReactElement;
    EnterFullScreenMenuItem(props: EnterFullScreenMenuItemProps): React.ReactElement;

    Open(props: OpenProps): React.ReactElement;
    OpenMenuItem(): React.ReactElement;

    Print(props: PrintProps): React.ReactElement;
    PrintMenuItem(props: PrintMenuItemProps): React.ReactElement;

    Rotate(props: RotateProps): React.ReactElement;
    RotateBackwardMenuItem(props: RotateDecoratorProps): React.ReactElement;
    RotateForwardMenuItem(props: RotateDecoratorProps): React.ReactElement;

    Search(props: SearchProps): React.ReactElement;
    ShowSearchPopover(props: ShowSearchPopoverProps): React.ReactElement;

    ShowProperties(props: ShowPropertiesProps): React.ReactElement;
    ShowPropertiesMenuItem(props: ShowPropertiesMenuItemProps): React.ReactElement;

    SwitchScrollMode(props: SwitchScrollModeProps): React.ReactElement;
    SwitchScrollModeMenuItem(props: SwitchScrollModeMenuItemProps): React.ReactElement;

    SwitchSelectionMode(props: SwitchSelectionModeProps): React.ReactElement;
    SwitchSelectionModeMenuItem(props: SwitchSelectionModeMenuItemProps): React.ReactElement;

    SwitchTheme(props: SwitchThemeProps): React.ReactElement;
    SwitchThemeMenuItem(props: SwitchThemeMenuItemProps): React.ReactElement;

    SwitchViewMode(props: SwitchViewModeProps): React.ReactElement;
    SwitchViewModeMenuItem(props: SwitchViewModeMenuItemProps): React.ReactElement;

    Zoom(props: ZoomProps): React.ReactElement;
    ZoomIn(props: ZoomInProps): React.ReactElement;
    ZoomInMenuItem(props: ZoomMenuItemProps): React.ReactElement;
    ZoomOut(props: ZoomOutProps): React.ReactElement;
    ZoomOutMenuItem(props: ZoomMenuItemProps): React.ReactElement;
}

export type TransformToolbarSlot = (toolbarSlot: ToolbarSlot) => ToolbarSlot;

// Plugin
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

export function toolbarPlugin(props?: ToolbarPluginProps): ToolbarPlugin;

// Components
export interface MoreActionsPopoverProps {
    toolbarSlot: ToolbarSlot;
}
export class MoreActionsPopover extends React.Component<MoreActionsPopoverProps> {}

export class MoreIcon extends React.Component {}
