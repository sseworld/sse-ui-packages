/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { type PdfJs } from '@sse-ui/pdf-core';
import { PageMode } from '@sse-ui/pdf-core';

export const setInitialTabFromPageMode = (doc: PdfJs.PdfDocument) =>
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    new Promise<number>((resolve, _) => {
        doc.getPageMode().then((pageMode) => {
            if (!pageMode) {
                resolve(-1);
            } else {
                switch (pageMode) {
                    case PageMode.Attachments:
                        resolve(2);
                        break;
                    case PageMode.Bookmarks:
                        resolve(1);
                        break;
                    case PageMode.Thumbnails:
                        resolve(0);
                        break;
                    default:
                        resolve(-1);
                        break;
                }
            }
        });
    });
