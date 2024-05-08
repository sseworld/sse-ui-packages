/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { type NormalizedKeyword } from './types/NormalizedKeyword';

// `new RegExp('')` will treat the source as `(?:)` which is not an empty string
export const EMPTY_KEYWORD_REGEXP: NormalizedKeyword = {
    keyword: '',
    regExp: new RegExp(' '),
    wholeWords: false,
};
