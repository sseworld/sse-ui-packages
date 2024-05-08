/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { ViewMode } from '@sse-ui/pdf-core';

export interface RenderSwitchViewModeProps {
    isDisabled: boolean;
    isSelected: boolean;
    mode: ViewMode;
    onClick(): void;
}
