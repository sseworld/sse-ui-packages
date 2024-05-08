/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import * as React from 'react';
import { useToggle } from '../hooks/useToggle';
import { ToggleStatus } from '../structs/ToggleStatus';

enum TogglePopupBy {
    Click = 'Click',
    Hover = 'Hover',
}

export const useTogglePopup = (): {
    opened: boolean;
    closeOnHover: () => void;
    openOnHover: () => void;
    toggleOnClick: () => void;
} => {
    const { opened, toggle } = useToggle(false);
    const [togglePopupBy, setTooglePopupBy] = React.useState(TogglePopupBy.Hover);

    const toggleOnClick = (): void => {
        switch (togglePopupBy) {
            case TogglePopupBy.Click:
                opened && setTooglePopupBy(TogglePopupBy.Hover);
                toggle(ToggleStatus.Toggle);
                break;
            case TogglePopupBy.Hover:
                setTooglePopupBy(TogglePopupBy.Click);
                toggle(ToggleStatus.Open);
                break;
        }
    };

    const openOnHover = (): void => {
        togglePopupBy === TogglePopupBy.Hover && toggle(ToggleStatus.Open);
    };

    const closeOnHover = (): void => {
        togglePopupBy === TogglePopupBy.Hover && toggle(ToggleStatus.Close);
    };

    return {
        opened,
        closeOnHover,
        openOnHover,
        toggleOnClick,
    };
};
