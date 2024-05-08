/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import { getPage, useSafeState, type PageSize, type PdfJs } from '@sse-ui/pdf-core';
import * as React from 'react';
import { PageThumbnail } from './PageThumbnail';

export const PageThumbnailContainer: React.FC<{
    canvas: HTMLCanvasElement;
    doc: PdfJs.PdfDocument;
    pageIndex: number;
    pageRotation: number;
    pageSize: PageSize;
    rotation: number;
    shouldRender: boolean;
    onLoad(): void;
}> = ({ canvas, doc, pageIndex, pageRotation, pageSize, rotation, shouldRender, onLoad }) => {
    const [page, setPage] = useSafeState<PdfJs.Page>(null);
    const isVertical = Math.abs(rotation + pageRotation) % 180 === 0;

    React.useEffect(() => {
        if (shouldRender) {
            getPage(doc, pageIndex).then((pdfPage) => {
                setPage(pdfPage);
            });
        }
    }, [shouldRender]);

    // To support the document which is already rotated
    const rotationNumber = (pageSize.rotation + rotation + pageRotation) % 360;

    return (
        page && (
            <PageThumbnail
                canvas={canvas}
                page={page}
                pageHeight={isVertical ? pageSize.pageHeight : pageSize.pageWidth}
                pageIndex={pageIndex}
                pageWidth={isVertical ? pageSize.pageWidth : pageSize.pageHeight}
                rotation={rotationNumber}
                onLoad={onLoad}
            />
        )
    );
};
