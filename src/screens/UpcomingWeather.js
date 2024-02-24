import React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';
import { upcomingWeather } from '../utils/upcomingWeather'
import { Styles } from '../styles/StyleComp';
import { weatherType } from '../utils/weatherType';
import { Feather } from '@expo/vector-icons';
import { timeNow } from '../utils/timeNow';

const UpcomingWeather = ({ weatherData }) => {
    const data = upcomingWeather(weatherData)
    console.log(data)
    const renderItem = ({ item }) => {
        { console.log(item) }
        return <View style={Styles.upItems}>
            <View>
                <Feather
                    name={weatherType[item.weather[0].main]?.icon}
                    size={80}
                    color='white'
                /><Text style={Styles.smTxt}>
                    {item.weather[0].main} | {item.main.temp}°C
                </Text>
            </View>

            <View>

                <Text style={Styles.smTxt} >{timeNow(item.dt).split(',')[0]} | {timeNow(item.dt).split(',')[1]}</Text>
                <Text style={Styles.smTxt} >Feels Like | {item.main.feels_like}°C</Text>
                <Text style={Styles.smTxt}>MAX {item.main.temp_max}°C | MIN {item.main.temp_min}°C </Text>
            </View>

        </View>
    }

    return (
        <SafeAreaView style={[Styles.container, { backgroundColor: 'rgba(0, 84, 255, 0.5)' }]}>
            <FlatList
                style={Styles.upcomingContents}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.dt}

            />
        </SafeAreaView>
    );
};

export default UpcomingWeather;


