import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import {styles} from "../../style/style"

export default function Main() {
  return (
    <View style={styles.container}>
      <Text>
        Это главная страница
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
