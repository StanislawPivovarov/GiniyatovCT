import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import {styles} from "../../style/style"

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text>
        Это страница загрузки
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
