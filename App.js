// In App.js in a new project
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, SafeAreaView, ScrollView, StatusBar, Button, Image, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ImageButton from './components/ImageButton';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Learn" component={HomeScreen}  options={{ headerShown: false}}/>
      <Tab.Screen name="Progress" component={ProgressScreen} options={{ headerShown: false}}/>
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false}}/>
    </Tab.Navigator>
  );
}

function ProgressScreen() {
  return (
    <View>
      <Text>PROGRESS</Text>
    </View>
  )
}

function SettingsScreen() {
  return (
    <View>
      <Text>SETTINGS</Text>
    </View>
  )
}

function HomeScreen() {
  return (
    <SafeAreaView style={styles.container1}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container2}>
          <Text>Your Courses</Text>
          <ImageButton 
            onPress={() => console.log("Button as component")} 
            imageStyle={styles.image} 
            source={require("./assets/icon.png")}
          />
          <ImageButton 
            onPress={() => console.log("Button as component")} 
            imageStyle={styles.image} 
            source={require("./assets/icon.png")} 
          />
          <ImageButton 
            onPress={() => console.log("Button as component")} 
            imageStyle={styles.image} 
            source={require("./assets/icon.png")} 
          />
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function SignInScreen() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
    >
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={text => setPassword(text)}
                style={styles.input}
                secureTextEntry
            />
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.button}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.buttonOutline]}
            >
                <Text style={styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  const [userToken, setUserToken] = useState(120);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userToken == null ? (
          <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false}}/>
        ) : (
          <Stack.Screen name="Tabs" component={MyTabs}  options={{ headerShown: false}}/>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 250,
    height: 250,
    paddingTop: 10
  },
  container1: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
  },
  inputContainer: {
   width: '80%'
  },
  input: {
   backgroundColor: 'white',
   paddingHorizontal: 15,
   paddingVertical: 25,
   borderRadius: 10,
   marginTop: 5,
  },
  buttonContainer: {
   width: '60%',
   justifyContent: 'center',
   alignItems: 'center',
   marginTop: 40,
  },
  button: {
   backgroundColor: '#0782F9',
   width: '100%',
   padding: 15,
   borderRadius: 10,
   alignItems: 'center'
  },
  buttonText: {
   color: 'white',
   fontWeight: '700',
   fontSize: 16,
  },
  buttonOutline: {
   backgroundColor: 'white',
   marginTop: 5,
   borderColor: '#0782F9',
   borderWidth: 2,
  },
  buttonOutlineText: {
   color: '#0782F9',
   fontWeight: '700',
   fontSize: 16,
  }
})

export default App;
