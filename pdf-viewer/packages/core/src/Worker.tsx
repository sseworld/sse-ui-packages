/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import * as PdfJs from 'pdfjs-dist';
import * as React from 'react';
import { type PdfJsApiProvider } from './types/PdfJsApiProvider';
import { PdfJsApiContext } from './vendors/PdfJsApiContext';

export const Worker: React.FC<{
    children?: React.ReactNode;
    workerUrl: string;
}> = ({ children, workerUrl }) => {
    const apiProvider = PdfJs as unknown as PdfJsApiProvider;
    apiProvider.GlobalWorkerOptions.workerSrc = workerUrl;

    return <PdfJsApiContext.Provider value={{ pdfJsApiProvider: apiProvider }}>{children}</PdfJsApiContext.Provider>;
};
