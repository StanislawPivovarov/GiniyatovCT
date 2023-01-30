import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import React from "react"
import Account from "../screens/Account"
import Adresses from "../screens/Adresses"
import Catalog from "../screens/Catalog"
import Main from "../screens/Main"
import { AppStack } from "./AppStack"
import { BottomTab } from "./tabs/BottomTab"


export const Navigator = () => {
    const Tab = createBottomTabNavigator();
    return(
        <NavigationContainer>
            <Tab.Screen name="Главная" component={Main}/>
            <Tab.Screen name="Адреса" component={Adresses}/>
            <Tab.Screen name="Каталог" component={Catalog}/>
            <Tab.Screen name="Аккаунт" component={Account}/>
        </NavigationContainer>
    )
}