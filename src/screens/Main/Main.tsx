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
import ItemCard from "../../components/ItemCard";
import { Link } from "@react-navigation/native";

export default function Main() {
  const Tab = createBottomTabNavigator();

  return (
<ScrollView style={mainStyles.margins}>
      <View style={mainStyles.header}>
        <View style={mainStyles.adress}>
          <View>
            <Text style={mainStyles.adressHeader}>
              Ваш адрес доставки <EnvironmentOutlined style={mainStyles.adressIcon} />
            </Text>
            <Link to={'./'} style={mainStyles.link}>
              Кремлевская, д. 35
            </Link>
          </View>
          <View>
            <SearchOutlined style={mainStyles.searchButton} />
          </View>
        </View>
      </View>
      <Carousel style={{height: 210, width: '100%'}}>
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
        <Text>Товары месяца</Text>
        <Carousel style={{height: 220}}>
           <View style={{width: '100%', marginHorizontal: 'auto', marginTop: '20px', flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <ItemCard
          name="Конго органик"
          category="кофе арабика"
          price="1200"
          weight="100гр."
          />
          <ItemCard
          name="Конго неорганик"
          category="кофе арабика"
          price="1200"
          weight="100гр."
          />
           </View>
        </Carousel>
      <StatusBar style="auto" />
    </ScrollView>
    
  );
}
