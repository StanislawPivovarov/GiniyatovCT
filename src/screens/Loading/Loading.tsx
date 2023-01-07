import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import {styles, componentStyles} from "../../style/style"
import { Button } from '@ant-design/react-native';

export default function Loading() {
  return (
    <View style={styles.container}>
        <View>
            <Button style={componentStyles.primaryButton}>Успех</Button>
            <Button style={componentStyles.primaryButton}>Неудача</Button>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}
