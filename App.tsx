import { StyleSheet, Text, View } from 'react-native';
import { Button, PaperProvider, TextInput } from 'react-native-paper';
import { theme } from './features/theme';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          mode="outlined"
          label="e-mail/phone"
          placeholder="Type sromething"
          right={<TextInput.Icon icon="account-circle" />}
        />
        <TextInput
          style={styles.input}
          mode="outlined"
          label="password"
          secureTextEntry
          placeholder="Type sromething"
          right={<TextInput.Icon icon="lock" />}
        />
        <Button style={styles.button} icon="login" mode="contained" onPress={() => console.log('Pressed')}>
          Log In
        </Button>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 26
  },
  input: {
    width: '100%'
  },
  button: {
    width: '100%',
    borderRadius: 4
  }
});
