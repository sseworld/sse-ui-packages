/**
 * A React component to view a PDF document
 *
 * @see https://sseworld.github.io/pdf-viewer
 * @license https://sseworld.github.io/pdf-viewer/license
 * @copyright 2024 SSE World <help@world.sse>
 */

import { type Store, type StoreKey, type StoreState } from '../types/Store';

export function createStore<T extends StoreState>(initialState?: T): Store<T> {
    let state: T = initialState || ({} as T);

    const listeners: {
        [K in keyof StoreState]?: Array<(p: StoreState[K]) => void>;
    } = {};

    const update = <K extends StoreKey<T>>(key: K, data: T[K]) => {
        state = {
            ...state,
            [key]: data,
        };
        (listeners[key] || []).forEach((handler) => handler(state[key]));
    };

    const get = <K extends StoreKey<T>>(key: K) => state[key];

    return {
        subscribe(key, handler) {
            listeners[key] = (listeners[key] || []).concat(handler);
        },
        unsubscribe(key, handler) {
            listeners[key] = (listeners[key] || []).filter((f) => f !== handler);
        },
        update(key, data) {
            update(key, data);
        },
        updateCurrentValue(key, updater) {
            const currentValue = get(key);
            if (currentValue !== undefined) {
                update(key, updater(currentValue));
            }
        },
        get(key) {
            return get(key);
        },
    };
}
