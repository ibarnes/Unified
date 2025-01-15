import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const SignUpScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleContinue = () => {
        // Navigate to the Sectors screen
        navigation.navigate('SectorsScreen');
    };

    return (
        <View style={styles.container}>
      <Text style={styles.title}>UNIFIED</Text>
      <TouchableOpacity style={styles.linkContainer}>
        <Text style={styles.linkText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButtonFacebook}>
        <Text style={styles.socialButtonText}>Continue with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButtonGoogle}>
        <Text style={styles.socialButtonTextGoogle}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButtonApple}>
        <Text style={styles.socialButtonText}>Continue with Apple</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or</Text>

      <TextInput style={styles.input} placeholder="Name" />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      <TouchableOpacity style={styles.signUpButton} onPress={handleContinue}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.disclaimerText}>
        We won’t share your information with anyone.
      </Text>
    </View>
    );
};

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  padding: 60,
	  justifyContent: 'center',
	  backgroundColor: '#fff',
	},
	title: {
	  fontSize: 24,
	  fontWeight: 'bold',
	  textAlign: 'center',
	  marginBottom: 10,
	},
	linkContainer: {
	  alignSelf: 'center',
	  marginBottom: 20,
	},
	linkText: {
	  color: '#007AFF',
	  fontSize: 16,
	},
	socialButtonFacebook: {
	  backgroundColor: '#1877F2',
	  padding: 15,
	  borderRadius: 5,
	  marginBottom: 10,
	},
	socialButtonGoogle: {
	  backgroundColor: '#fff',
	  padding: 15,
	  borderRadius: 5,
	  marginBottom: 10,
	  borderWidth: 1,
	  borderColor: '#ccc',
	 
	},
	socialButtonApple: {
	  backgroundColor: '#000',
	  padding: 15,
	  borderRadius: 5,
	  marginBottom: 10,
	},
	socialButtonText: {
	  color: '#fff',
	  fontWeight: 'bold',
	  textAlign: 'center',
	},
	socialButtonTextGoogle: {
	  fontWeight: 'bold',
	  textAlign: 'center',
	  color: '#000',
	},
	orText: {
	  textAlign: 'center',
	  marginVertical: 10,
	  color: '#666',
	},
	input: {
	  backgroundColor: '#f9f9f9',
	  padding: 15,
	  borderRadius: 5,
	  marginBottom: 10,
	  borderWidth: 1,
	  borderColor: '#ccc',
	},
	signUpButton: {
	  backgroundColor: '#28A745',
	  padding: 15,
	  borderRadius: 5,
	  marginTop: 10,
	},
	signUpButtonText: {
	  color: '#fff',
	  fontWeight: 'bold',
	  textAlign: 'center',
	},
	disclaimerText: {
	  textAlign: 'center',
	  marginTop: 10,
	  fontSize: 12,
	  color: '#666',
	},
  });

export default SignUpScreen;