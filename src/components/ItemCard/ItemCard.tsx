import { View } from "@ant-design/react-native";
import React, { useEffect } from "react";
import { mainStyles } from "../../screens/Main/style";
import { Image } from "@rneui/themed";

import kongo from "../../assets/kongo.png";
import { Button } from "@ant-design/react-native";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useFonts, Comfortaa_700Bold, Comfortaa_400Regular } from "@expo-google-fonts/comfortaa";
import * as SplashScreen from "expo-splash-screen";

interface ItemProps {
  name: string;
  category: string;
  price: string;
  weight: string;
}

SplashScreen.preventAutoHideAsync();

function ItemCard(props: ItemProps) {
  const [fontsLoaded] = useFonts({
    Comfortaa_700Bold, Comfortaa_400Regular
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
    <View style={mainStyles.itemCard}>
      <View style={mainStyles.itemContent}>
        <View>
          <p style={mainStyles.itemName}>{props.name}</p>
          <p style={mainStyles.itemCategory}>{props.category}</p>
          <p style={mainStyles.price}>
            {props.price}&#8381; &#32;/{props.weight}
          </p>
        </View>
        <View>
          <Image
            style={mainStyles.itemImage}
            source={require("../../assets/kongo.png")}
          />
        </View>
      </View>

      <Button style={mainStyles.button}>
        <View style={mainStyles.buttonCart}>
          <p style={mainStyles.buttonHeader}>В корзину</p>
          <ShoppingCartOutlined style={mainStyles.iconButton} />
        </View>
      </Button>
    </View>
  );
}

export default ItemCard;
