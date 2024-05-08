/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { type Destination, type PdfJs, type PluginOnTextLayerRender } from '@sse-ui/pdf-core';
import { type MatchPosition } from './MatchPosition';
import { type NormalizedKeyword } from './NormalizedKeyword';
import { type SearchTargetPageFilter } from './SearchTargetPage';
import { type SingleKeyword } from './SingleKeyword';

export interface StoreProps {
    areShortcutsPressed?: boolean;
    doc?: PdfJs.PdfDocument;
    initialKeyword?: SingleKeyword[];
    keyword?: NormalizedKeyword[];
    matchPosition: MatchPosition;
    renderStatus: Map<number, PluginOnTextLayerRender>;
    jumpToDestination?(destination: Destination): void;
    jumpToPage?(pageIndex: number): void;
    targetPageFilter?: SearchTargetPageFilter;
}
