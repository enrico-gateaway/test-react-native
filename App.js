import React, { useCallback, useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Text,
  Pressable,
  Alert,
  TextInput
} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import styles from './styles';
import strings from 'res/strings';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.header}>
        <Image
          source={require('./assets/images/logo_acquisizione_immobile.png')}
          style={{width: 201, height: 111}}
        />
      </View>
      <View style={styles.main}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>{strings.login.username}</Text>
          <TextInput
            style={styles.input}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>{strings.login.password}</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
          />
        </View>
        <Pressable style={styles.button} onPress={() => Alert.alert('Hai cliccato sul pulsante!')}>
          <Text style={styles.buttonText}>{strings.login.button}</Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>{strings.footer.copyright}</Text>
      </View>
    </SafeAreaView>
  );
}