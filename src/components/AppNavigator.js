import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

const AppNavigator = ({ weatherData }) => {
    return (
        <Tabs.Navigator
        // ... screenOptions remain the same
        >
            <Tabs.Screen
                name='Current Weather'
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <MaterialCommunityIcons
                            name="weather-partly-cloudy"
                            size={24}
                            color={focused ? '#0999' : '#9099'}
                        />
                    ),
                }}
            >
                {() => (
                    <CurrentWeather weatherData={weatherData && weatherData ? weatherData : null} />
                )}
            </Tabs.Screen>

            <Tabs.Screen
                name='Upcoming'
                options={{
                    tabBarIcon: ({ color, size, focused }) => (
                        <MaterialCommunityIcons
                            name="weather-cloudy-clock"
                            size={24}
                            color={focused ? '#0999' : '#9099'}
                        />
                    ),
                }}
            >
                {() => (
                    <UpcomingWeather weatherData={weatherData && weatherData.list ? weatherData.list : null} />
                )}
            </Tabs.Screen>
        </Tabs.Navigator>
    );
};

export default AppNavigator;
