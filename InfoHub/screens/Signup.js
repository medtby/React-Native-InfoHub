import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';
import Text from "@kaloraat/react-native-text";
import UserInput from '../components/auth/UserInput';
import SubmitButton from '../components/auth/SubmitButton';

const Signup = () => {
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[loading, setLoading] = useState(false);
    return (
        <View style={{ flex: 1, justifyContent: "center"}}>
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
            
            <SubmitButton title="Sign Up" />

            <Text>{JSON.stringify({name, email, password}, null, 4)}</Text>
        </View>
    );
};

export default Signup;