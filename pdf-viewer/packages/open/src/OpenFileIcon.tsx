/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { Icon } from '@sse-ui/pdf-core';
import * as React from 'react';

export const OpenFileIcon: React.FC = () => (
    <Icon size={16}>
        <path d="M18.5,7.5c.275,0,.341-.159.146-.354L12.354.854a.5.5,0,0,0-.708,0L5.354,7.147c-.2.195-.129.354.146.354h3v10a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V7.5Z" />
        <path d="M23.5,18.5v4a1,1,0,0,1-1,1H1.5a1,1,0,0,1-1-1v-4" />
    </Icon>
);
