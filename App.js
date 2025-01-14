import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./src/Pages/Home";
import PokemonPage from "./src/Pages/PokemonPage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="PokemonPage" component={PokemonPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}