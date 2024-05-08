/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { RotateDirection } from '@sse-ui/pdf-core';
import * as React from 'react';

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
