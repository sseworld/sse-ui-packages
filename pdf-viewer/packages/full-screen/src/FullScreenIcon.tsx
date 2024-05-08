/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { Icon } from '@sse-ui/pdf-core';
import * as React from 'react';

export const FullScreenIcon: React.FC = () => (
    <Icon size={16}>
        <path d="M0.5 12L23.5 12" />
        <path d="M11.5 1L11.5 23" />
        <path d="M8.5 4L11.5 1 14.5 4" />
        <path d="M20.5 9L23.5 12 20.5 15" />
        <path d="M3.5 15L0.5 12 3.5 9" />
        <path d="M14.5 20L11.5 23 8.5 20" />
    </Icon>
);
