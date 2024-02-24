import { NavigationContainer } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, StatusBar, ActivityIndicator } from 'react-native';
import AppNavigator from './src/components/AppNavigator';
import { useGetWeather } from './src/Hooks/useGetWeather';

const App = () => {
  const { isLoading, isError, errorMsg, locError, data } = useGetWeather();

  if (locError) {
    return <SafeAreaView style={[styles.wrapper, { alignItems: 'center', backgroundColor: '' }]}>
      <Text style={styles.errorText}>Reload your app and turn your location on</Text>
    </SafeAreaView>
  }

  if (isError) {
    return (
      <SafeAreaView style={styles.wrapper}>
        <Text>{errorMsg}</Text>
      </SafeAreaView>
    );
  }

  if (isLoading) {
    return (
      <SafeAreaView style={styles.wrapper}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  if (data && data.list) {
    return (
      <SafeAreaView style={styles.wrapper}>
        <NavigationContainer>

          <AppNavigator weatherData={data} />
        </NavigationContainer>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
  },
  errorText: {
    fontSize: 30
  }
});

export default App;