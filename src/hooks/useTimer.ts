import { useState, useEffect } from "react";

export const useTimer = (delay: number) => {
    // State and setters for debounced value
    const [debouncedValue, setDebouncedValue] = useState(false);
    useEffect(
        () => {
            const handler = setInterval(() => {
                setDebouncedValue((v) => !v);
            }, delay);
            return () => {
                clearInterval(handler);
            };
        },
        [delay] // Only re-call effect if value or delay changes
    );
    return debouncedValue;
};