/* eslint-disable prettier/prettier */

import {createStackNavigator} from '@react-navigation/stack';
import {
  Splash,
  GetStarted,
  Register,
  Login,
  UploadPhoto,
  Doctor,
  Messages,
  Hospitals,
  ChooseDoctor,
  Chatting,
  UserProfile,
  UpdateProfile,
  DoctorProfile,
  News,
  Dashboard,
  Question,
  Result,
  ListGejala,
  ListProvinsi
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator, Profile} from '../components';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const MainApp = ({route}) => {
  return (
    // <Drawer.Navigator initialRouteName="Home">
    //   <Drawer.Screen
    //     name="Result"
    //     initialParams={{result: hasil}}
    //     component={Result}
    //   />
    //   <Drawer.Screen name="Notifications" component={Messages} />
    // </Drawer.Navigator>
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name='Dashboard' component={Dashboard}/>
      <Tab.Screen name="Profile" component={UserProfile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ListGejala"
        component={ListGejala}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="ListProvinsi"
        component={ListProvinsi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Question"
        component={Question}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Result"
        component={Result}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChooseDoctor"
        component={ChooseDoctor}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chatting"
        component={Chatting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DoctorProfile"
        component={DoctorProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="News"
        component={News}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
