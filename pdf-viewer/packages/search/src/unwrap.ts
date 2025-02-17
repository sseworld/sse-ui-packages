/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

const removeNode = (ele: Node): void => {
    const parent = ele.parentNode;
    if (parent) {
        parent.removeChild(ele);
    }
};

const replaceNode = (replacementNode: Node, node: Node): void => {
    removeNode(replacementNode);
    const parent = node.parentNode;
    if (parent) {
        parent.insertBefore(replacementNode, node);
    }
    removeNode(node);
};

export const unwrap = (ele: Node): void => {
    const parent = ele.parentNode;
    if (!parent) {
        return;
    }

    const range = document.createRange();
    range.selectNodeContents(ele);

    replaceNode(range.extractContents(), ele);

    // Merge the text nodes
    parent.normalize();
};
