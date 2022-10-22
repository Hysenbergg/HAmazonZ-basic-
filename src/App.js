import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Details from './pages/Details';
import Products from './pages/Products';
import Login from './pages/Login';

const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="LoginPages" component={Login} options={{headerShown: false}} />
          <Stack.Screen name="ProductsPages" component={Products} options={{ 
            title: "HAmazonZ",
            headerStyle: {backgroundColor: '#64b5f6'},
            headerTitleStyle: { color : 'white'}, 
           }} />
          <Stack.Screen name="DetailsPages" component={Details} options={{ 
            title: "HAmazonZ",
            headerStyle: {backgroundColor: '#64b5f6'},
            headerTitleStyle: { color : 'white'}, 
            headerTintColor:'white'
           }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
