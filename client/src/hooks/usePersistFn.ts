import { useRef } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Noop = (...args: any[]) => any;

/**
 * Hook to persist function reference across renders without dependencies
 * Alternative to useCallback with no dependency array needed
 */
export function usePersistFn<T extends Noop>(fn: T) {
  const fnRef = useRef<T>(fn);
  fnRef.current = fn;

  const persistFn = useRef<T>(null);
  if (!persistFn.current) {
    persistFn.current = function (this: unknown, ...args) {
      return fnRef.current!.apply(this, args);
    } as T;
  }

  return persistFn.current!;
}
