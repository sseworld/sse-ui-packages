/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { Icon } from '@sse-ui/pdf-core';
import * as React from 'react';

export const ExitFullScreenIcon: React.FC = () => (
    <Icon size={16}>
        <path d="M11.5 23.499L11.5 14.499" />
        <path d="M7.5 18.499L11.5 14.499 15.5 18.499" />
        <path d="M11.5 1.499L11.5 10.499" />
        <path d="M7.5 6.499L11.5 10.499 15.5 6.499" />
        <path d="M20.5 12.499L1.5 12.499" />
    </Icon>
);
