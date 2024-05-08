/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { type AttachmentPlugin } from '@sse-ui/pdf-attachment';
import { type BookmarkPlugin } from '@sse-ui/pdf-bookmark';
import { type PdfJs, type Plugin } from '@sse-ui/pdf-core';
import { type ThumbnailPlugin, type ThumbnailPluginProps } from '@sse-ui/pdf-thumbnail';
import { type ToolbarPlugin, type ToolbarPluginProps, type ToolbarProps, type ToolbarSlot } from '@sse-ui/pdf-toolbar';
import * as React from 'react';

// Types
export { type ToolbarPluginProps, type ToolbarProps, type ToolbarSlot };

export interface SidebarTab {
    content: React.ReactElement;
    icon: React.ReactElement;
    title: string;
}

// Plugin
export interface DefaultLayoutPlugin extends Plugin {
    activateTab(index: number): void;
    toggleTab(index: number): void;
    readonly attachmentPluginInstance: AttachmentPlugin;
    readonly bookmarkPluginInstance: BookmarkPlugin;
    readonly thumbnailPluginInstance: ThumbnailPlugin;
    readonly toolbarPluginInstance: ToolbarPlugin;
}

export interface DefaultLayoutPluginProps {
    thumbnailPlugin?: ThumbnailPluginProps;
    toolbarPlugin?: ToolbarPluginProps;
    renderToolbar?: (Toolbar: (props: ToolbarProps) => React.ReactElement) => React.ReactElement;
    setInitialTab?: (doc: PdfJs.PdfDocument) => Promise<number>;
    sidebarTabs?: (defaultTabs: SidebarTab[]) => SidebarTab[];
}

export function defaultLayoutPlugin(props?: DefaultLayoutPluginProps): DefaultLayoutPlugin;
export function setInitialTabFromPageMode(doc: PdfJs.PdfDocument): Promise<number>;

// Components
export class BookmarkIcon extends React.Component {}
export class FileIcon extends React.Component {}
export class ThumbnailIcon extends React.Component {}
