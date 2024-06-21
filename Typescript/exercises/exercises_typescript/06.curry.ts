function curry<T extends (...args: any[]) => any>(fn: T): (...args: Parameters<T>) => ReturnType<T> {
    return function curried(...args: Parameters<T>): ReturnType<T> {
        if (args.length === fn.length) {
            return fn.apply(this, args);
        } else {
            return function (...args2: Parameters<T>) {
                return curried.apply(this, args.concat(args2));
            }
        }
    }
}