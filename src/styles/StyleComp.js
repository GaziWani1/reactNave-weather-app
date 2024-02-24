import React from 'react'
import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mainWeather: {
        width: '80%',
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 3,
        flex: 1,
    },
    temp: {
        fontSize: 50,
        color: '#fff',
        marginVertical: 3,
    },
    smTxt: {
        fontSize: 13,
        color: '#fff',
        marginVertical: 3,
    },
    msg: {
        fontSize: 20,
        color: '#fff'
    },
    extraInfo: {
        width: '100%',
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'rgba(58, 122, 180,0.3)',
        // background: linear - gradient(90deg, rgba(58, 122, 180, 0.48792016806722693) 0 %, rgba(69, 252, 207, 1) 100 %);
    },
    scrollContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    item: {
        width: 90,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        backgroundColor: 'rgba(58, 122, 180,0.1)',
        borderRadius: 8,
        borderWidth: 2,
        borderColor: 'rgba(58, 122, 180, 0.2)'
    },
    upcomingContents: {
        flex: 1,
        padding: 20,
        marginBottom: 2
    },
    upItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        padding: 10,
        borderRadius: 5,
        width: 300,
        backgroundColor: 'rgba(0, 84, 255, 0.4)',
    }
})

