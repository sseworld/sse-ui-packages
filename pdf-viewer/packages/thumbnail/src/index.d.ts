/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { RotateDirection, type Plugin } from '@sse-ui/pdf-core';
import * as React from 'react';

export enum ThumbnailDirection {
    Horizontal = 'Horizontal',
    Vertical = 'Vertical',
}

// Plugin
export interface ThumbnailsProps {
    renderThumbnailItem?: RenderThumbnailItem;
    thumbnailDirection?: ThumbnailDirection;
}

export interface CoverProps {
    getPageIndex?({ numPages }: { numPages: number }): number;
    width?: number;
}

export interface RenderCurrentPageLabelProps {
    currentPage: number;
    numPages: number;
    pageIndex: number;
    pageLabel: string;
}

export type RenderCurrentPageLabel = (props: RenderCurrentPageLabelProps) => React.ReactElement;

export interface RenderThumbnailItemProps {
    currentPage: number;
    key: string;
    numPages: number;
    pageIndex: number;
    renderPageLabel: React.ReactElement;
    renderPageThumbnail: React.ReactElement;
    onJumpToPage: () => void;
    onRotatePage: (direction: RotateDirection) => void;
}

export type RenderThumbnailItem = (props: RenderThumbnailItemProps) => React.ReactElement;

export interface ThumbnailPluginProps {
    renderCurrentPageLabel?: RenderCurrentPageLabel;
    // The spinner that replaces the default `Spinner` component
    // For example, it is displayed when loading the cover or thumbnail of a page
    renderSpinner?: () => React.ReactElement;
    // The width of thumbnails in pixels
    thumbnailWidth?: number;
}

export interface ThumbnailPlugin extends Plugin {
    Cover: (props: CoverProps) => React.ReactElement;
    Thumbnails(props?: ThumbnailsProps): React.ReactElement;
}

export function thumbnailPlugin(props?: ThumbnailPluginProps): ThumbnailPlugin;
