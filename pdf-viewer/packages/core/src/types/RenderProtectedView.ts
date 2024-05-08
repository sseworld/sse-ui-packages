/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import * as React from 'react';
import { PasswordStatus } from '../structs/PasswordStatus';

export interface RenderProtectedViewProps {
    passwordStatus: PasswordStatus;
    verifyPassword: (password: string) => void;
}

export type RenderProtectedView = (renderProps: RenderProtectedViewProps) => React.ReactElement;
