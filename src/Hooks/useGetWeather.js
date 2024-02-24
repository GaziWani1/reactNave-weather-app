import { useState, useEffect, useCallback } from 'react';
import { API_KEY } from '@env';
import { useGetLocation } from './useGetLocation';

export const useGetWeather = () => {
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const { locError, location } = useGetLocation();
    const [data, setData] = useState([]);

    const getWeather = useCallback(async () => {
        try {
            setLoading(true);
            const res = await fetch(
                `http://api.openweathermap.org/data/2.5/forecast?lat=${location?.lat}&lon=${location?.lon}&appid=${API_KEY}&units=metric`
            )
            const data = await res.json()
            setData(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false);
            setError(true);
            setErrorMsg("Something went wrong :(");
        }
    }, [location]);

    useEffect(() => {
        let isMounted = true;

        if (isMounted) {
            getWeather();
        }

        return () => {
            isMounted = false;
        };
    }, [getWeather]);

    return { isLoading, isError, errorMsg, locError, data };
};
