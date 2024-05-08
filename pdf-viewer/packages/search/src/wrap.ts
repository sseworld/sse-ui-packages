/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

export const wrap = (ele: Node, startOffset: number, endOffset: number): HTMLElement => {
    const range = new Range();
    range.setStart(ele, startOffset);
    range.setEnd(ele, endOffset);

    const wrapper = document.createElement('span');
    range.surroundContents(wrapper);
    return wrapper;
};
