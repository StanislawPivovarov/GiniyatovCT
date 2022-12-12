import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import {styles} from "../../style/style"

export default function Addreses() {
  return (
    <View style={styles.container}>
      <Text>
        Это страница адресов, тут будет карта
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
