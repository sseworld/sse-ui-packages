/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import * as React from 'react';
import { Icon } from './Icon';

export const NoteIcon: React.FC = () => (
    <Icon size={16}>
        <path d="M2.000 2.500 L22.000 2.500 L22.000 23.500 L2.000 23.500 Z" />
        <path d="M6 4.5L6 0.5" />
        <path d="M18 4.5L18 0.5" />
        <path d="M10 4.5L10 0.5" />
        <path d="M14 4.5L14 0.5" />
    </Icon>
);
