/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import * as React from 'react';
import { ToggleStatus } from '../structs/ToggleStatus';
import { type Toggle } from '../types/Toggle';

export const useToggle = (isOpened: boolean): { opened: boolean; toggle: Toggle } => {
    const [opened, setOpened] = React.useState(isOpened);
    const toggle: Toggle = (status?: ToggleStatus) => {
        switch (status) {
            case ToggleStatus.Close:
                setOpened(false);
                break;
            case ToggleStatus.Open:
                setOpened(true);
                break;
            case ToggleStatus.Toggle:
            default:
                setOpened((isOpened) => !isOpened);
                break;
        }
    };

    return { opened, toggle };
};
