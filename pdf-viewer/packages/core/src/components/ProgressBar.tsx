/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import * as React from 'react';
import { TextDirection, ThemeContext } from '../theme/ThemeContext';
import { classNames } from '../utils/classNames';

export const ProgressBar: React.FC<{
    progress: number;
}> = ({ progress }) => {
    const { direction } = React.useContext(ThemeContext);
    const isRtl = direction === TextDirection.RightToLeft;

    return (
        <div
            className={classNames({
                'rpv-core__progress-bar': true,
                'rpv-core__progress-bar--rtl': isRtl,
            })}
        >
            <div className="rpv-core__progress-bar-progress" style={{ width: `${progress}%` }}>
                {progress}%
            </div>
        </div>
    );
};
