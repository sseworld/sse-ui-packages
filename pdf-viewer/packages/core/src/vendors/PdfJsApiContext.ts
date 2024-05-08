/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import * as React from 'react';
import { type PdfJsApiProvider } from '../types/PdfJsApiProvider';

export interface PdfJsApiContextProps {
    pdfJsApiProvider?: PdfJsApiProvider;
}

export const PdfJsApiContext = React.createContext<PdfJsApiContextProps>({});
