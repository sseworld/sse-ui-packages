/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { type Plugin } from '@sse-ui/pdf-core';
import * as React from 'react';

// Plugin
export interface AttachmentPlugin extends Plugin {
    Attachments: () => React.ReactElement;
}

export function attachmentPlugin(): AttachmentPlugin;
