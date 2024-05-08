/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { type PdfJs } from '@sse-ui/pdf-core';
import * as React from 'react';

export interface RenderBookmarkItemProps {
    bookmark: PdfJs.Outline;
    // You can customize the bookmark item based on the default renderers
    defaultRenderItem: (onClickItem: () => void, children: React.ReactNode) => React.ReactElement;
    defaultRenderTitle: (onClickBookmark: () => void) => React.ReactElement;
    defaultRenderToggle: (expandIcon: React.ReactElement, collapseIcon: React.ReactElement) => React.ReactElement;
    depth: number;
    hasSubItems: boolean;
    index: number;
    isExpanded: boolean;
    path: string;
    onClickItem: () => void;
    onClickTitle: () => void;
    onToggleSubItems: () => void;
}

export type RenderBookmarkItem = (props: RenderBookmarkItemProps) => React.ReactElement;
