/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { Icon } from '@sse-ui/pdf-core';
import * as React from 'react';

export const DownArrowIcon: React.FC = () => {
    return (
        <Icon size={16}>
            <path d="M6.427,8.245A.5.5,0,0,1,6.862,7.5H17.138a.5.5,0,0,1,.435.749l-5.139,9a.5.5,0,0,1-.868,0Z" />
        </Icon>
    );
};
