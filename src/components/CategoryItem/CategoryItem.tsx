import React from "react";
import { View } from "react-native";
import { Grid, Image } from "antd-mobile";
import { CatalogItem } from "./style";
import { Link } from "@react-navigation/native";

import { useFonts, Inter_300Light } from '@expo-google-fonts/inter';
import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';



interface itemProps {
  title: string;
  image: string;
}

const CategoryItem = (props: itemProps) => {
    const [fontsLoaded] = useFonts({
        Inter_300Light,
      });
    
      useEffect(() => {
        if (fontsLoaded) {
          SplashScreen.hideAsync();
        }
      }, [fontsLoaded]);
    
      if (!fontsLoaded) {
        return null;
      }    
  return (
    <Grid.Item>
      <View style={CatalogItem.component}>
        <Image style={CatalogItem.cover} src={props.image} alt="img" />
        <Link to={"./"} style={CatalogItem.title}>{props.title}</Link>
      </View>
    </Grid.Item>
  );
};

export default CategoryItem;
