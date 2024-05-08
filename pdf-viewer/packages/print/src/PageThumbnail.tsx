/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import { useSafeState, type PdfJs } from '@sse-ui/pdf-core';
import * as React from 'react';
import { isRunningInJest } from './isRunningInJest';

export const PageThumbnail: React.FC<{
    canvas: HTMLCanvasElement;
    page: PdfJs.Page;
    pageHeight: number;
    pageIndex: number;
    pageWidth: number;
    rotation: number;
    onLoad(): void;
}> = ({ canvas, page, pageHeight, pageIndex, pageWidth, rotation, onLoad }) => {
    const renderTask = React.useRef<PdfJs.PageRenderTask>();
    const [src, setSrc] = useSafeState('');
    const testWithJest = React.useMemo(() => isRunningInJest(), []);

    const handleImageLoad = () => {
        // The `onload` event isn't triggered in Jest environment
        if (!testWithJest) {
            onLoad();
        }
    };

    React.useEffect(() => {
        const task = renderTask.current;
        if (task) {
            task.cancel();
        }

        const printUnit = 150 / 72;
        canvas.height = Math.floor(pageHeight * printUnit);
        canvas.width = Math.floor(pageWidth * printUnit);

        const canvasContext = canvas.getContext('2d') as CanvasRenderingContext2D;
        canvasContext.save();
        canvasContext.fillStyle = 'rgb(255, 255, 255)';
        canvasContext.fillRect(0, 0, canvas.width, canvas.height);
        canvasContext.restore();

        const viewport = page.getViewport({ rotation, scale: 1 });
        renderTask.current = page.render({
            canvasContext,
            intent: 'print',
            transform: [printUnit, 0, 0, printUnit, 0, 0],
            viewport,
        });
        renderTask.current.promise.then(
            () => {
                // `URL.createObjectURL` is not available in jest-dom yet
                if ('toBlob' in canvas && 'createObjectURL' in URL) {
                    canvas.toBlob((blob) => {
                        setSrc(URL.createObjectURL(blob));
                        testWithJest && onLoad();
                    });
                } else {
                    setSrc(canvas.toDataURL());
                    testWithJest && onLoad();
                }
            },
            () => {
                /**/
            },
        );
    }, []);

    return (
        src && (
            <div className="rpv-print__page">
                <img data-testid={`print__thumbnail-${pageIndex}`} src={src} onLoad={handleImageLoad} />
            </div>
        )
    );
};
