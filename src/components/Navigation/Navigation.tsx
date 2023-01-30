import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Main from "../../screens/Main";
import Addreses from "../../screens/Adresses";
import Catalog from "../../screens/Catalog";
import Account from "../../screens/Account";
import { NavigationContainer } from "@react-navigation/native";
const HomeStack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <HomeStack.Screen name="Главная" component={Main} />
      <HomeStack.Screen name="Адреса" component={Addreses} />
      <HomeStack.Screen name="Каталог" component={Catalog} />
      <HomeStack.Screen name="Аккаунт" component={Account} />
    </NavigationContainer>
  );
}

export default Navigation;
