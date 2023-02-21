import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Catalog from './src/screens/Catalog';
import Loading from './src/screens/Loading';
import Main from "./src/screens/Main"
import NetworkError from './src/screens/NetworkError';
import BlackTea from './src/screens/Catalog/Items/BlackTea'
import {styles} from "./src/style/style"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <BlackTea/>
    </SafeAreaView>
  );
}

