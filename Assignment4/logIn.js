import React from 'react';
import { StyleSheet, Button, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';

export default function LogIn({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Jobizz</Text>
        <Text style={styles.welcome}>Welcome Back 👋</Text>
        <Text style={styles.subtitle}>Let's log in. Apply to jobs!</Text>
      </View>
      
      <TextInput style={styles.input} placeholder="Name" />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />

      <TouchableOpacity style={styles.button}
      onPress={() =>navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or continue with</Text>

      <View style={styles.socialLogin}>
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-apple" size={24} color="black" borderRadius="" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <AntDesign name="google" size={24} color="red" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Ionicons name="logo-facebook" size={24} color="blue" />
        </TouchableOpacity>
      </View>

      <Text style={styles.registerText}>
        Haven't an account? <Text style={styles.registerLink}>Register</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    width: '100%',
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    color: '#2b6cb0',
    marginBottom: 15,
    textAlign: 'left',
  },
  welcome: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 25,
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 4,
    fontSize: 16,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#2b6cb0',
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 25,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  orText: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 25,
  },
  socialLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 25,
  },
  socialButton: {
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerText: {
    fontSize: 16,
    color: '#6b7280',
  },
  registerLink: {
    color: '#2b6cb0',
    textDecorationLine: 'underline',
  },
});
