/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import * as React from 'react';

export const ModalOverlay: React.FC<{
    children?: React.ReactNode;
}> = ({ children }) => <div className="rpv-core__modal-overlay">{children}</div>;
