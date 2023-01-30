import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Account from "../screens/Account";
import Adresses from "../screens/Adresses";
import Catalog from "../screens/Catalog";
import Main from "../screens/Main";

export const AppStack = () => {
    const Stack = createNativeStackNavigator();

    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Главная" component={Main}/>
            <Stack.Screen name="Адреса" component={Adresses}/>
            <Stack.Screen name="Каталог" component={Catalog}/>
            <Stack.Screen name="Аккаунт" component={Account}/>
        </Stack.Navigator>
    )
}