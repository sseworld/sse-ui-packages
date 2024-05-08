/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import { type Plugin } from '@sse-ui/pdf-core';
import * as React from 'react';
import { LocalePopover, LocalePopoverProps } from './LocalePopover';

export interface LocaleSwitcherPlugin extends Plugin {
    LocalePopover: (props: LocalePopoverProps) => React.ReactElement;
}

export const localeSwitcherPlugin = (): LocaleSwitcherPlugin => {
    const LocalePopoverDecorator = (props: LocalePopoverProps) => <LocalePopover {...props} />;

    return {
        LocalePopover: LocalePopoverDecorator,
    };
};
