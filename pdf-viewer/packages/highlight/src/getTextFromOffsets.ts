/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { type DivText } from './types/DivText';

interface Result {
    divTexts: DivText[];
    wholeText: string;
}

export const getTextFromOffsets = (
    nodes: Node[],
    pageIndex: number,
    startDivIdx: number,
    startOffset: number,
    endDivIdx: number,
    endOffset?: number,
): Result => {
    if (startDivIdx < endDivIdx) {
        const startDivText = nodes
            .slice(startDivIdx, startDivIdx + 1)
            .map((node) => node.textContent.substring(startOffset).trim())
            .join(' ');

        const middleDivText = nodes
            .slice(startDivIdx + 1, endDivIdx)
            .map((node) => node.textContent.trim())
            .join(' ');

        const endDivText = nodes
            .slice(endDivIdx, endDivIdx + 1)
            .map((endDiv) => endDiv.textContent.substring(0, endOffset || endDiv.textContent.length))
            .join(' ');
        const wholeText = `${startDivText} ${middleDivText} ${endDivText}`;
        const divTexts = nodes.slice(startDivIdx, endDivIdx + 1).map((node, idx) => ({
            divIndex: startDivIdx + idx,
            pageIndex,
            textContent: node.textContent,
        }));
        return {
            divTexts,
            wholeText,
        };
    } else {
        const div = nodes[startDivIdx];
        const wholeText = div.textContent.substring(startOffset, endOffset || div.textContent.length).trim();
        const divTexts = [
            {
                divIndex: startDivIdx,
                pageIndex,
                textContent: div.textContent,
            },
        ];
        return {
            divTexts,
            wholeText,
        };
    }
};
