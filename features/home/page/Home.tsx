import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { LoginStore } from '../store/store';

export const Home = () => {

    const count = LoginStore.useState(l => l.count);

    return <View style={styles.container}>
        <Button onPress={() => {
            LoginStore.update(l => {
                l.count++                   
            })
        }}> Click me </Button>
        <Text>{count}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    }
})
