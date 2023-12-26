import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Text from "@kaloraat/react-native-text";
import UserInput from '../components/auth/UserInput';
import SubmitButton from '../components/auth/SubmitButton';
import axios from 'axios';
import Logo from '../components/auth/Logo';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();  // Utilise useNavigation pour obtenir la référence à la navigation

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    if (!email || !password) {
      alert("Both email and password are required");
      setLoading(false);
      return;
    }

    console.log("LOGIN REQUEST =>", email, password);
    
    try {
      const { data } = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });

      setLoading(false);
      console.log("LOGIN SUCCESS =>", data);
      alert('Login successful');
      // Navigation vers la page de connexion après une connexion réussie
      navigation.navigate('Home'); // ou l'écran vers lequel tu veux naviguer
    } catch (err) {
      console.log(err);
      setLoading(false);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>

      <Logo />

      <Text title center>Connexion</Text>
      <UserInput
        name="EMAIL"
        value={email}
        setValue={setEmail}
        autoCompleteType="email"
        keyboardType="email-address"
      />
      <UserInput
        name="PASSWORD"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
        autoCompleteType="password"
      />

      <SubmitButton title="Connexion" onPress={handleSubmit} loading={loading} />
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text center style={{ marginTop: 10 }}>Vous n'avez pas de compte ? Inscrivez-vous</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Login;