import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Signin from "./Screen/Login/signin";
import Signup from "./Screen/Login/signup";
import Calender from "./Screen/Main/calender";
import Community from "./Screen/Main/community";
import Mypage from "./Screen/Main/mypage";
import Recommand from "./Screen/Main/recommand";
import SplashScreen from "./Screen/splashScreen";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Auth = () => {
    return (
      <Stack.Navigator initialRouteName="Signin">
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{
            title: '',
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            title: '',
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    );
  };

const Main = () => {
    return (
      <Stack.Navigator initialRouteName="Calender">
        <Stack.Screen
          name="Calender"
          component={Calender}
          options={{
            title: '',
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="Community"
          component={Community}
          options={{
            title: '',
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="Mypage"
          component={Mypage}
          options={{
            title: '',
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="Recommand"
          component={Recommand}
          options={{
            title: '',
            headerBackTitleVisible: false,
          }}
        />
      </Stack.Navigator>
    );
  };

export default function Navigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Main"
            component={Main}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}