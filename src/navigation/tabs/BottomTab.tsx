import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Account from "../../screens/Account";
import Adresses from "../../screens/Adresses";
import Catalog from "../../screens/Catalog";
import Main from "../../screens/Main";


export const BottomTab = () => {
    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator>
            <Tab.Screen name="Главная" component={Main}/>
            <Tab.Screen name="Адреса" component={Adresses}/>
            <Tab.Screen name="Каталог" component={Catalog}/>
            <Tab.Screen name="Аккаунт" component={Account}/>
        </Tab.Navigator>
    )
}