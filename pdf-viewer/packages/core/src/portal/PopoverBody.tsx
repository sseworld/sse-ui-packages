/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

'use client';

import * as React from 'react';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayoutEffect';
import { Position } from '../structs/Position';
import { TextDirection, ThemeContext } from '../theme/ThemeContext';
import { classNames } from '../utils/classNames';
import { mergeRefs } from '../utils/mergeRefs';
import { Arrow } from './Arrow';
import { useClickOutsideStack } from './useClickOutsideStack';

export const PopoverBody = React.forwardRef<
    HTMLDivElement,
    {
        ariaControlsSuffix: string;
        children?: React.ReactNode;
        closeOnClickOutside: boolean;
        position: Position;
        onClose(): void;
    }
>((props, ref) => {
    const { ariaControlsSuffix, children, closeOnClickOutside, position, onClose } = props;

    const innerRef = React.useRef<HTMLDivElement>();
    const { direction } = React.useContext(ThemeContext);
    const isRtl = direction === TextDirection.RightToLeft;

    const [contentRef] = useClickOutsideStack(closeOnClickOutside, onClose);
    const mergedContentRef = mergeRefs([ref, contentRef]);

    useIsomorphicLayoutEffect(() => {
        const innerContentEle = innerRef.current;
        if (!innerContentEle) {
            return;
        }

        // Limit the height of popover content
        const maxHeight = document.body.clientHeight * 0.75;
        if (innerContentEle.getBoundingClientRect().height >= maxHeight) {
            innerContentEle.style.overflow = 'auto';
            innerContentEle.style.maxHeight = `${maxHeight}px`;
        }
    }, []);

    const innerId = `rpv-core__popover-body-inner-${ariaControlsSuffix}`;

    return (
        <div
            aria-describedby={innerId}
            className={classNames({
                'rpv-core__popover-body': true,
                'rpv-core__popover-body--rtl': isRtl,
            })}
            id={`rpv-core__popover-body-${ariaControlsSuffix}`}
            ref={mergedContentRef}
            role="dialog"
            tabIndex={-1}
        >
            <Arrow customClassName="rpv-core__popover-body-arrow" position={position} />
            <div id={innerId} ref={innerRef}>
                {children}
            </div>
        </div>
    );
});

PopoverBody.displayName = 'PopoverBody';
