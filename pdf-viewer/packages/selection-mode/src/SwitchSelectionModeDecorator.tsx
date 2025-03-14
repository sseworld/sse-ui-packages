/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import { LocalizationContext, type LocalizationMap } from '@sse-ui/pdf-core';
import * as React from 'react';
import { HandToolIcon } from './HandToolIcon';
import { TextSelectionIcon } from './TextSelectionIcon';
import { SelectionMode } from './structs/SelectionMode';

interface RenderChildren {
    icon: React.ReactElement;
    label: string;
    onClick(): void;
}

export const SwitchSelectionModeDecorator: React.FC<{
    children(props: RenderChildren): React.ReactElement;
    mode: SelectionMode;
    onClick(): void;
}> = ({ children, mode, onClick }) => {
    const { l10n } = React.useContext(LocalizationContext);

    let label = '';
    let icon = <TextSelectionIcon />;

    switch (mode) {
        case SelectionMode.Hand:
            label =
                l10n && l10n.selectionMode ? ((l10n.selectionMode as LocalizationMap).handTool as string) : 'Hand tool';
            icon = <HandToolIcon />;
            break;

        case SelectionMode.Text:
        default:
            label =
                l10n && l10n.selectionMode
                    ? ((l10n.selectionMode as LocalizationMap).textSelectionTool as string)
                    : 'Text selection tool';
            icon = <TextSelectionIcon />;
            break;
    }

    return children({ icon, label, onClick });
};
