import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import {styles} from "../../style/style"

export default function Catalog() {
  return (
    <View style={styles.container}>
      <Text>
        Это страница каталога
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
