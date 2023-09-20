import { useEffect, useRef } from 'react';

export const useEventListener = (
    eventType: keyof WindowEventMap,
    callback: (event: Event) => void,
    element: HTMLElement | Window = window
): void => {
    const callbackRef = useRef(callback);

    useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    useEffect(() => {
        if (element == null) return;

        const handler = (e: Event) => callbackRef.current(e);
        element.addEventListener(eventType, handler);

        return () => {
            element.removeEventListener(eventType, handler);
        };
    }, [eventType, element]);
};
