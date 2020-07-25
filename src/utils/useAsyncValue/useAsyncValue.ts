import {useEffect, useState} from "react";

function delay(t: any, v: any) {
    return new Promise(function(resolve) {
        setTimeout(resolve.bind(null, v), t)
    });
}

// the generic parameter could be omitted, if I used infer TS keyword, with strict type safety
// but from the experience it can be problematic and can take some time to do it right, so I leave it as is for now
export const useAsyncValue = <TPromisedValue>(promisedValue: Promise<TPromisedValue>) => {
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
    return { asyncValue, error, isLoading };
};