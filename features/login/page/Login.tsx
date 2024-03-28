import { Button, TextInput } from "react-native-paper"
import { View } from 'react-native';
import { loginStyles } from "../loginStyles";
import { } from 'react-native-screens'
import { ParamListBase, RouteProp } from "@react-navigation/native";

export const Login = ({ navigation }: {
    route: RouteProp<ParamListBase, "Login">;
    navigation: any;
}) => {

    const handleLogInOnPress = () => {
        navigation.navigate('Home')
    }

    return <View style={loginStyles.container}>
        <TextInput
            style={loginStyles.input}
            mode="outlined"
            label="e-mail/phone"
            placeholder="Type sromething"
            right={<TextInput.Icon icon="account-circle" />}
        />
        <TextInput
            style={loginStyles.input}
            mode="outlined"
            label="password"
            secureTextEntry
            placeholder="Type sromething"
            right={<TextInput.Icon icon="lock" />}
        />
        <Button style={loginStyles.button} icon="login" 
            mode="contained" 
            onPress={handleLogInOnPress}
        >
            Log In
        </Button>
    </View>
}