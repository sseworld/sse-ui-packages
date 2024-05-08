/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import { useIsomorphicLayoutEffect } from '@sse-ui/pdf-core';
import * as React from 'react';
import { getCssProperties } from './getCssProperties';
import { type OnHighlightKeyword } from './types/OnHighlightKeyword';
import { type HighlightArea } from './types/RenderHighlightsProps';

export const HightlightItem: React.FC<{
    index: number;
    area: HighlightArea;
    onHighlightKeyword?(props: OnHighlightKeyword): void;
}> = ({ index, area, onHighlightKeyword }) => {
    const containerRef = React.useRef<HTMLDivElement>();

    useIsomorphicLayoutEffect(() => {
        const highlightEle = containerRef.current;
        if (onHighlightKeyword && highlightEle) {
            onHighlightKeyword({
                highlightEle,
                keyword: area.keyword,
            });
        }
    }, []);

    return (
        <div
            className="rpv-search__highlight"
            data-index={index}
            ref={containerRef}
            style={getCssProperties(area)}
            title={area.keywordStr.trim()}
        />
    );
};
