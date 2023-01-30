import { EnvironmentOutlined, IeSquareFilled, SearchOutlined } from "@ant-design/icons";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image } from "react-native";
import { mainStyles } from "./style";
import { Button, Carousel } from "@ant-design/react-native";
import { ScrollView } from "react-native-gesture-handler";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Navigator } from "../../navigation/Navigator";
import React from "react";
import img from '../../assets/bannerexample.png'

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
      <Text>Акции</Text>
      <Carousel style={{height: 200}}>
           <View style={{width: 'max-content', marginHorizontal: 'auto', marginTop: '20px'}}>
          <Image style={{height: "180px", width: "360px", margin: '0 auto'}} source={require('../../assets/bannerexample.png')}/>
           </View>
           <View style={{width: 'max-content', marginHorizontal: 'auto', marginTop: '20px'}}>
          <Image style={{height: "180px", width: "360px", margin: '0 auto'}} source={require('../../assets/bannerexample.png')}/>
           </View>
           <View style={{width: 'max-content', marginHorizontal: 'auto', marginTop: '20px'}}>
          <Image style={{height: "180px", width: "360px", margin: '0 auto'}} source={require('../../assets/bannerexample.png')}/>
           </View>
           <View style={{width: 'max-content', marginHorizontal: 'auto', marginTop: '20px'}}>
          <Image style={{height: "180px", width: "360px", margin: '0 auto'}} source={require('../../assets/bannerexample.png')}/>
           </View>
           <View style={{width: 'max-content', marginHorizontal: 'auto', marginTop: '20px'}}>
          <Image style={{height: "180px", width: "360px", margin: '0 auto'}} source={require('../../assets/bannerexample.png')}/>
           </View>
           <View style={{width: 'max-content', marginHorizontal: 'auto', marginTop: '20px'}}>
          <Image style={{height: "180px", width: "360px", margin: '0 auto'}} source={require('../../assets/bannerexample.png')}/>
           </View>
           <View style={{width: 'max-content', marginHorizontal: 'auto', marginTop: '20px'}}>
          <Image style={{height: "180px", width: "360px", margin: '0 auto'}} source={require('../../assets/bannerexample.png')}/>
           </View>
        </Carousel>
      <StatusBar style="auto" />
    </ScrollView>
    
  );
}
