import { Flex } from '@ant-design/react-native';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F4F5F0',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
export const componentStyles = StyleSheet.create({
    primaryButton: {
        borderRadius: 16,
        width: '60%',
        font: '#ECE3D2',
        backgroundColor: '#4E4138',
        top: 20,
        border: "none",
        display: 'flex',
        alignSelf: 'center'
    }
})

export const conntectionError = StyleSheet.create({
    Text: {
        textAlign: 'center',
        fontSize: 18,
    }
})