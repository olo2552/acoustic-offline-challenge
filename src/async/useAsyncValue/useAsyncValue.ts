import {useEffect, useMemo, useState} from "react";

type UnboxPromise<T extends Promise<any>> = T extends Promise<infer U> ? U: never;

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
export const useAsyncValue = <TPromisedValueProvider extends (...args: any[]) => Promise<any>>(
    promisedValueProvider: TPromisedValueProvider,
    promisedValueProviderDependencies: Parameters<TPromisedValueProvider>
): AsyncValueSet<UnboxPromise<ReturnType<TPromisedValueProvider>>> => {
    const articlePromise = useMemo(() => promisedValueProvider.bind(null, ...promisedValueProviderDependencies), promisedValueProviderDependencies);
    const [asyncValue, setAsyncValue] = useState<TPromisedValueProvider | null>(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        promisedValueProvider()
            .then(setAsyncValue)
            .catch(setError)
            .finally(() => {
                setIsLoading(false);
            })
    }, []);
    return { asyncValue, error, isLoading } as AsyncValueSet<UnboxPromise<ReturnType<TPromisedValueProvider>>>;
};