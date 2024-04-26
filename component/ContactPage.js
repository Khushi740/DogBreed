import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ContactPage = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = () => {
    const isValid = /\S+@\S+\.\S+/.test(email);
    if (!isValid) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
    return isValid;
  };

  const handleSubmit = () => {
    const isEmailValid = validateEmail();
    if (isEmailValid) {
      // Perform form submission action (e.g., send data to server)
      setSuccessMessage('Form submitted successfully');

      // Reset form fields and clear success message after 3 seconds
      setTimeout(() => {
        setEmail('');
        setEmailError('');
        setDob('');
        setPassword('');
        setSuccessMessage('');
      }, 3000);
    } else {
      setSuccessMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        onBlur={validateEmail}
      />
      {emailError ? <Text style={styles.error}>{emailError}</Text> : null}

      <Text style={styles.label}>Date of Birth</Text>
      <TextInput
        style={styles.input}
        value={dob}
        onChangeText={setDob}
        placeholder="YYYY-MM-DD"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <Button title="Submit" onPress={handleSubmit} />

      {successMessage ? <Text style={styles.success}>{successMessage}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFF', // Set background color to white
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333', // Set label text color to dark gray
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  success: {
    color: 'green',
    marginTop: 10,
    textAlign: 'center', // Center-align success message
  },
});

export default ContactPage;
