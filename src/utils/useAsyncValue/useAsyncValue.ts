import {useEffect, useState} from "react";

type AsyncValueLoaded<T> = {
    isLoading: false;
    error: null;
    asyncValue: T;
}

type AsyncValueLoading<T> = {
    isLoading: true;
    error: null;
    asyncValue: null;
}

type AsyncValueErrored<T> = {
    isLoading: true;
    error: any;
    asyncValue: null;
}

type AsyncValueSet<T> = AsyncValueLoaded<T> | AsyncValueLoading<T> | AsyncValueErrored<T>;

// the generic parameter could be omitted, if I used infer TS keyword, with strict type safety
// but from the experience it can be problematic and can take some time to do it right, so I leave it as is for now
export const useAsyncValue = <TPromisedValue>(promisedValue: Promise<TPromisedValue>): AsyncValueSet<TPromisedValue> => {
    const [asyncValue, setAsyncValue] = useState<TPromisedValue | null>(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        (async () => {
            console.log("effect called")
            try {
                setIsLoading(true)
                const response = await promisedValue;
                setAsyncValue(response);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);
    return { asyncValue, error, isLoading } as AsyncValueSet<TPromisedValue>;
};