/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

export const classNames = (classes: { [clazz: string]: boolean }): string => {
    const result: string[] = [];

    Object.keys(classes).forEach((clazz) => {
        if (clazz && classes[clazz]) {
            result.push(clazz);
        }
    });

    return result.join(' ');
};
