import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {styles} from "./src/style/style"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>
        Это точка входа.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

