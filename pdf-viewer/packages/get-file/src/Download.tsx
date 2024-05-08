/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import { type OpenFile, type PdfJs, type Store, type StoreHandler } from '@sse-ui/pdf-core';
import * as React from 'react';
import { DownloadButton } from './DownloadButton';
import { downloadFile } from './downloadFile';
import { type RenderDownloadProps } from './types/RenderDownloadProps';
import { type StoreProps } from './types/StoreProps';

export type RenderDownload = (props: RenderDownloadProps) => React.ReactElement;

export interface DownloadProps {
    children?: RenderDownload;
}

export const Download: React.FC<{
    children?: RenderDownload;
    fileNameGenerator: (file: OpenFile) => string;
    store: Store<StoreProps>;
}> = ({ children, fileNameGenerator, store }) => {
    const [currentFile, setCurrentFile] = React.useState<OpenFile>(store.get('file'));
    const [currentDocument, setCurrentDocument] = React.useState<PdfJs.PdfDocument>(store.get('doc'));

    const handleDocumentChanged: StoreHandler<PdfJs.PdfDocument> = (doc: PdfJs.PdfDocument) => {
        setCurrentDocument(doc);
    };

    const handleFileChanged: StoreHandler<OpenFile> = (file: OpenFile) => {
        setCurrentFile(file);
    };

    React.useEffect(() => {
        store.subscribe('doc', handleDocumentChanged);
        store.subscribe('file', handleFileChanged);

        return () => {
            store.subscribe('doc', handleDocumentChanged);
            store.unsubscribe('file', handleFileChanged);
        };
    }, []);

    const download = () => {
        if (currentDocument && currentFile) {
            downloadFile(currentDocument, fileNameGenerator(currentFile));
        }
    };

    const defaultChildren = (props: RenderDownloadProps) => <DownloadButton onClick={props.onClick} />;
    const render = children || defaultChildren;

    return render({
        onClick: download,
    });
};
