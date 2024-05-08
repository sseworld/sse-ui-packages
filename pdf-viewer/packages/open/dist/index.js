/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use strict';

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./cjs/open.min.js');
} else {
    module.exports = require('./cjs/open.js');
}
