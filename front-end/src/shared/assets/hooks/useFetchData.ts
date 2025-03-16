import { useEffect, useState } from "react";

// TODO: Перенести в shared/lib/hooks/useFetchData.ts
export const useFetchData = <T>(fetchFunction: () => Promise<T>) => {
    const [data, setData] = useState<T | []>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<any>(null);

    const isError = (error: unknown): error is Error => {
        return error instanceof Error;
      };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetchFunction();
                setData(response);
            } catch (error) {
                if (isError(error)) {
                    setError(error.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        }
        fetchData();
      }, [fetchFunction]);

      return { data, loading, error };
};
