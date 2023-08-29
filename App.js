import React from 'react';
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

import styles from './styles';
import strings from 'res/strings';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./assets/images/logo_acquisizione_immobile.png')}
          style={{width: 201, height: 111}}
        />
      </View>
      <View style={styles.main}>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Username</Text>
          <TextInput
            style={styles.input}
          />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
          />
        </View>
        <Pressable style={styles.button} onPress={() => Alert.alert('Hai cliccato sul pulsante!')}>
          <Text style={styles.buttonText}>{strings.onboarding.term.heading}</Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>@ 2023 HeartItaly srls</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;