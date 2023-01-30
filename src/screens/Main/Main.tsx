import { EnvironmentOutlined, SearchOutlined } from "@ant-design/icons";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { mainStyles } from "./style";
import { Button } from "@ant-design/react-native";
import { ScrollView } from "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Navigator } from "../../navigation/Navigator";

export default function Main() {
  const Tab = createBottomTabNavigator();

  return (

      <ScrollView style={mainStyles.margins}>
      <View style={mainStyles.header}>
        <View style={mainStyles.adress}>
          <View>
            <Text style={{ fontSize: 24 }}>
              Ваш адрес доставки <EnvironmentOutlined />
              
            </Text>
            <Text style={{ fontSize: 20, textDecorationLine: "underline" }}>
              Кремлевская, д. 35
            </Text>
          </View>
          <View>
            <SearchOutlined style={{ fontSize: 30 }} />
          </View>
        </View>
      </View>
      
      <StatusBar style="auto" />
    <Navigator/>
    </ScrollView>
    
  );
}
