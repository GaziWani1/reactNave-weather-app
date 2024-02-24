import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export const useGetLocation = () => {
    const [locError, setLocError] = useState(null);
    const [location, setLocation] = useState(null);

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    setLocError(true)
                    return;
                }

                let location = await Location.getCurrentPositionAsync({});
                const loc = {
                    lat: location.coords.latitude,
                    lon: location.coords.longitude
                };

                setLocation(loc);
            } catch (error) {
                setLocError(true)
            }
        };

        fetchLocation();
    }, []);

    return { locError, location };
};