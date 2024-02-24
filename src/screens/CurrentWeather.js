import { SafeAreaView, View, Text } from 'react-native'
import { Styles } from '../styles/StyleComp'
import { Feather, Entypo } from '@expo/vector-icons';
import { weatherType } from '../utils/weatherType';
import HourlyForcast from '../components/HourlyForcast';

const CurrentWeather = ({ weatherData }) => {
    const { main: { humidity, temp, feels_like, temp_max, temp_min }, weather, wind, dt_txt } = weatherData.list[0];
    // console.log(weatherData.list[0])
    const { country, name } = weatherData.city
    const weatherCondition = weather[0].main;
    const hourlyForcast = weatherData.list.filter((e) => {
        return e.dt_txt.includes(dt_txt.split(' ')[0])
    })

    return (
        <SafeAreaView style={[Styles.container,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor }]
        }>
            <View style={Styles.mainWeather}>

                <Feather
                    name={weatherType[weatherCondition]?.icon}
                    size={100}
                    color='white'
                />
                <Text style={Styles.smTxt}>
                    <Entypo name="location" size={24} color="white" />   {name},{country}
                </Text>
                <Text style={Styles.temp}>{temp} °C </Text>
                <Text style={Styles.smTxt}>
                    {weather[0]?.description}
                </Text>
            </View>
            <View style={Styles.extraInfo}>
                <Text style={Styles.smTxt} >
                    Real Feel {feels_like} °C </Text>
                <Text style={Styles.smTxt} >   MIN {temp_min}°C  |  MAX {temp_max}°C
                </Text>
                <Text style={Styles.smTxt}>
                    humidity {humidity} %  |  wind {wind.speed} km/h
                </Text>

                <HourlyForcast data={hourlyForcast} />
            </View>
        </SafeAreaView>
    )
}

export default CurrentWeather