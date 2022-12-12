import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import {styles} from "../../style/style"

export default function Account() {
  return (
    <View style={styles.container}>
      <Text>
        Это страница аккаунта, тут будут такие вещи, как личный кабинет, код длля скидки и тп.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
