import { useEventListener } from '.';
import { isAppRendered } from '../helpers/isAppRendered';

export const useClickOutside = (
    ref: React.RefObject<HTMLElement>,
    callback: (event: Event) => void
): void => {
    if (!isAppRendered()) return;
    useEventListener("click", (e) => {
        if (ref.current == null || ref.current.contains(e.target as Node))
            return;
        callback(e);
    }, window);
};
