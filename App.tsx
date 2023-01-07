import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Loading from './src/screens/Loading';
import NetworkError from './src/screens/NetworkError';
import {styles} from "./src/style/style"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NetworkError/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

