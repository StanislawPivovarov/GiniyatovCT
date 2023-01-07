import { WifiOutlined } from "@ant-design/icons";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import { styles, conntectionError, componentStyles } from "../../style/style";
import Logo from "../../assets/Icons/Logo";
import { Button } from "@ant-design/react-native";


export default function NetworkError() {
  return (
    <SafeAreaView style={{marginHorizontal: 16, flexDirection: "column", flex: 1, marginVertical: 40}}>
      <View style={{alignItems: 'center', flex: 2, justifyContent: "center"}}>
        <Logo wsize="75%" hsize="75%" />
      </View>
        <View style={{flex: 2, justifyContent: "center"}}>
        <WifiOutlined style={{ fontSize: "35px", color: "#A9A9A4", marginBottom: 15}} />
          <Text style={conntectionError.Text}>
            Похоже, что вы не подключены к интернету. <br />
            Проверьте подключение и повторите попытку.
          </Text>
        </View>
        <View style={{flex: 2, justifyContent: "center", alignContent: 'center'}}>
          <Button style={componentStyles.primaryButton} type='primary'>
            Повторить
          </Button>
        </View>
    </SafeAreaView>
  );
}
