/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

export const getRectFromOffsets = (textDiv: HTMLElement, startOffset: number, endOffset: number): DOMRect => {
    const clonedEle = textDiv.cloneNode(true);
    textDiv.parentNode.appendChild(clonedEle);

    const firstChild = clonedEle.firstChild;
    const range = new Range();
    range.setStart(firstChild, startOffset);
    range.setEnd(firstChild, endOffset);

    const wrapper = document.createElement('span');
    range.surroundContents(wrapper);

    const rect = wrapper.getBoundingClientRect();

    // Remove the clone element
    clonedEle.parentNode.removeChild(clonedEle);

    return rect;
};
