/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

export const findNearest = (
    low: number,
    high: number,
    value: number,
    getItemValue: (index: number) => number,
): number => {
    while (low <= high) {
        const middle = ((low + high) / 2) | 0;
        const currentValue = getItemValue(middle);

        if (currentValue < value) {
            low = middle + 1;
        } else if (currentValue > value) {
            high = middle - 1;
        } else {
            return middle;
        }
    }

    return low > 0 ? low - 1 : 0;
};
