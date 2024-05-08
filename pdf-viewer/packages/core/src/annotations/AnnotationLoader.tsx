/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import * as React from 'react';
import { useSafeState } from '../hooks/useSafeState';
import { type PdfJs } from '../types/PdfJs';

interface Status {
    loading: boolean;
    annotations: PdfJs.Annotation[];
}

export const AnnotationLoader: React.FC<{
    page: PdfJs.Page;
    renderAnnotations(annotations: PdfJs.Annotation[]): React.ReactElement;
}> = ({ page, renderAnnotations }) => {
    const [status, setStatus] = useSafeState<Status>({
        loading: true,
        annotations: [],
    });

    React.useEffect(() => {
        page.getAnnotations({ intent: 'display' }).then((result) => {
            setStatus({
                loading: false,
                annotations: result,
            });
        });
    }, []);

    return status.loading ? <></> : renderAnnotations(status.annotations);
};
