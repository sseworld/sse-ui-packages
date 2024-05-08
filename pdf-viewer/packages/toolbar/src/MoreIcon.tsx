/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { Icon } from '@sse-ui/pdf-core';
import * as React from 'react';

export const MoreIcon: React.FC = () => (
    <Icon size={16}>
        <path
            d={`M12,0.5c1.381,0,2.5,1.119,2.5,2.5S13.381,5.5,12,5.5S9.5,4.381,9.5,3S10.619,0.5,12,0.5z
            M12,9.5
            c1.381,0,2.5,1.119,2.5,2.5s-1.119,2.5-2.5,2.5S9.5,13.381,9.5,12S10.619,9.5,12,9.5z
            M12,18.5c1.381,0,2.5,1.119,2.5,2.5
            s-1.119,2.5-2.5,2.5S9.5,22.381,9.5,21S10.619,18.5,12,18.5z`}
        />
    </Icon>
);
