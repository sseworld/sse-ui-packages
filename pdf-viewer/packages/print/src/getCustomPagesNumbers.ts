/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { type PdfJs } from '@sse-ui/pdf-core';

const generateRange = (min: number, max: number): number[] =>
    Array(max - min + 1)
        .fill(0)
        .map((_, i) => min + i);

const removeDuplicate = (arr: number[]): number[] => arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));

// `customPages` is a string consists of given pages or ranges of pages
// For example:
// * 1, 2, 3
// * 1-3
// * 1-3, 5, 8-11
export const getCustomPagesNumbers = (customPages: string): ((doc: PdfJs.PdfDocument) => number[]) => {
    return (doc) => {
        const results: number[] = [];
        customPages
            .replace(/\s+/g, '') // Replace multiple spaces
            .split(',')
            .forEach((part) => {
                const range = part
                    .split('-')
                    .map((c) => parseInt(c, 10))
                    .filter((c) => Number.isInteger(c));
                if (range.length === 1) {
                    results.push(range[0] - 1);
                } else if (range.length === 2) {
                    results.push(...generateRange(range[0] - 1, range[1] - 1));
                }
            });
        return removeDuplicate(results).filter((i) => i >= 0 && i < doc.numPages);
    };
};
