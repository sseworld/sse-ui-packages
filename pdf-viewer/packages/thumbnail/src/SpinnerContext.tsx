/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import { Spinner } from '@sse-ui/pdf-core';
import * as React from 'react';

export interface SpinnerContextProps {
    renderSpinner: () => React.ReactElement;
}

export const defaultSpinner = () => <Spinner />;

export const SpinnerContext = React.createContext<SpinnerContextProps>({
    renderSpinner: defaultSpinner,
});
