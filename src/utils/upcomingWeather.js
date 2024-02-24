export const upcomingWeather = (list) => {
    const data = list.reduce((accumulator, current) => {
        const currentDate = current.dt_txt.split(' ')[0]; // Corrected variable name

        if (!accumulator.some(item => item.dt_txt.split(' ')[0] === currentDate)) {
            accumulator.push(current);
        }
        return accumulator;
    }, []);

    return data;
};


