import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { Styles } from '../styles/StyleComp'
import { timeNow } from '../utils/timeNow'
import { Feather } from '@expo/vector-icons';
import { weatherType } from '../utils/weatherType';

const HourlyForcast = ({ data }) => {
    // console.log(data)
    return (
        <>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={true} // Set to true to show the scroll indicator
                contentContainerStyle={Styles.scrollContainer}>
                {data.map((e, index) => (
                    <View key={index} style={Styles.item}>
                        <Feather
                            name={weatherType[e.weather[0].main]?.icon}
                            size={40}
                            color='white'
                        />
                        <Text style={Styles.smTxt} >{timeNow(e.dt).split(',')[0]}</Text>
                        <Text style={Styles.smTxt} >{timeNow(e.dt).split(',')[1]}</Text>
                        <Text style={Styles.smTxt}>{e.main.temp}°C</Text>
                    </View>
                ))}
            </ScrollView>
        </>
    )
}

export default HourlyForcast