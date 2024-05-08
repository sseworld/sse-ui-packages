/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import { classNames, TextDirection, ThemeContext } from '@sse-ui/pdf-core';
import * as React from 'react';

export const PropertyItem: React.FC<{
    label: string;
    value: string;
}> = ({ label, value }) => {
    const { direction } = React.useContext(ThemeContext);
    const isRtl = direction === TextDirection.RightToLeft;

    return (
        <dl
            className={classNames({
                'rpv-properties__item': true,
                'rpv-properties__item--rtl': isRtl,
            })}
        >
            <dt className="rpv-properties__item-label">{label}:</dt>
            <dd className="rpv-properties__item-value">{value || '-'}</dd>
        </dl>
    );
};
