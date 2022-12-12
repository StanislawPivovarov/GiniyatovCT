import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import {styles} from "../../style/style"

export default function NetworkError() {
  return (
    <View style={styles.container}>
      <Text>
        Это страница ошибки подключения
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
