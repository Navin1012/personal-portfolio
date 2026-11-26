import {lazy, useEffect, useState} from "react";

export function lazyOptionalEffect(load) {
  return lazy(() => load().catch(() => ({default: () => null})));
}

export default function useDeferredEffect(delay) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let idle;
    const timer = window.setTimeout(() => {
      if (window.requestIdleCallback) {
        idle = window.requestIdleCallback(() => setReady(true), {
          timeout: 1500
        });
      } else {
        setReady(true);
      }
    }, delay);

    return () => {
      window.clearTimeout(timer);
      if (idle !== undefined) window.cancelIdleCallback?.(idle);
    };
  }, [delay]);

  return ready;
}
