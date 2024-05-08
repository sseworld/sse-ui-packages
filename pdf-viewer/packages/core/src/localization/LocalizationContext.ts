/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import * as React from 'react';
import { type LocalizationMap } from '../types/LocalizationMap';
import enUs from './en_US.json';

export interface LocalizationContextProps {
    l10n: LocalizationMap;
    setL10n(l10n: LocalizationMap): void;
}

export const DefaultLocalization = enUs as unknown as LocalizationMap;

export const LocalizationContext = React.createContext<LocalizationContextProps>({
    l10n: DefaultLocalization,
    setL10n: () => {},
});
