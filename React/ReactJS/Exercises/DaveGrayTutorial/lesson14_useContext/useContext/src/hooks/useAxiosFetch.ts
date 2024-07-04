import { useState, useEffect } from "react";
import axios, { AxiosError, CancelTokenSource } from "axios";

const useAxiosFetch = (dataUrl: string) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    let isMounted: boolean = true;
    const source: CancelTokenSource = axios.CancelToken.source();

    const fetchData = async (url: string) => {
      setIsLoading(true);
        try {
            const response = await axios.get(url, {
                cancelToken: source.token,
            });
          
            if (isMounted) {
                setData(response.data);
                setFetchError('');
            }
      } catch (err) {
        if (err instanceof AxiosError) {
          if (isMounted) {
              setFetchError(err.message);
              setData([]);
          }
        }
        } finally {
            isMounted && setIsLoading(false);
      }
      };
      
      fetchData(dataUrl);

      const cleanUp = () => {
          isMounted = false;
          source.cancel();
      }

      return cleanUp;
  }, [dataUrl]);
    
    return { data, fetchError, isLoading };
};

export default useAxiosFetch;