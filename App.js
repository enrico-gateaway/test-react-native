import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
  Alert,
  TextInput
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('./assets/logo_acquisizione_immobile.png')}
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
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>@ 2023 HeartItaly srls</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },
  header: {
    alignSelf: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 48,
    paddingBottom: 48,
  },
  main: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
  },
  footer: {
    alignSelf: 'center',
    paddingTop: 24,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 3,
    backgroundColor: '#50C878',
    marginTop: 24,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  inputGroup: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 8,
  },
  input: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 3,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#FFFFFF',
  },
  footerText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#6D767E',
  },
});

export default App;