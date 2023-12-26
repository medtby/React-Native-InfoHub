import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';
import Text from "@kaloraat/react-native-text";
import UserInput from '../components/auth/UserInput';
import SubmitButton from '../components/auth/SubmitButton';
import axios from 'axios';
import Logo from '../components/auth/Logo';

const Signup = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true)
        if (!name || !email || !password) {
            alert("All fields are required");
            setLoading(false);
            return;
        }
        console.log("REQUETE INSCRIPTION =>", name, email, password);
        try {
            const {data} = await axios.post("http://localhost:8000/api/signup", {
                name,
                email,
                password,
            });
            setLoading(false);
            console.log("SIGN IN SUCCESS =>", data);
            alert('Connexion avec succès');
        } catch (err) {
            console.log(err);
            setLoading(false);
        }
        navigation.navigate('Login');
    };

    return (
        <View style={{ flex: 1, justifyContent: "center"}}>

            <Logo />

            <Text title center>Inscription</Text>
            <UserInput 
            name="NAME"
            value={name}
            setValue={setName}
            autoCapitalize="words"
            autoCorrect={false}
            />
            <UserInput name="EMAIL" value={email} setValue={setEmail} autoCompleteType="email" keyboardType="email-address"/>
            <UserInput name="PASSWORD" value={password} setValue={setPassword} secureTextEntry={true} autoCompleteType="password"/>
            
            <SubmitButton title="Sign Up" onPress={handleSubmit} loading={loading}/>
        </View>
    );
};

export default Signup;