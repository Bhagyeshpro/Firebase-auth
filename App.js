import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import { Entypo } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false,
           }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{
            headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#4b9e93',
          },
          headerRight: () => 
          (
            <View style={{marginHorizontal: 15, marginTop: 15}}>
              <TouchableOpacity>
                <Entypo name="menu" size={30} color="white" />,
              </TouchableOpacity>
            </View>
          ),
         headerTintColor: '#fff',
          }}
         name="Home" component={HomeScreen} />

          
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
