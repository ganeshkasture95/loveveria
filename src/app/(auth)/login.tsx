
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Image, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("auth");
        if (token) {
          router.replace("/(tabs)/profile")
        }
      } catch (error) {
        console.log("Error", error)
      }
    }
    checkLoginStatus()
  }, [])
  const handleLogin = () => {
   try {
    

    const user = {
      email: email,
      password: password,
    };
    // router.push("/select")
    axios.post("http://10.0.2.2:3000/login", user).then((response) => {
      console.log(response);
      const token = response.data.token;
      AsyncStorage.setItem("auth", token);
      router.replace("/(auth)/select")
    })

   } catch (error) {
      console.log(error)
   }
  };

  return (
    <SafeAreaView>
      <View className='flex bg-white h-full w-full items-center'>

        <View className='blok items-center mt-14'>
          <Image source={require("p/public/assets/images/lovelogo.png")} className='w-60 h-60' />
          <Text className=' font-extrabold text-3xl ' >
            LoveLink
          </Text>
        </View>

        <KeyboardAvoidingView className='w-full px-10'>
          <View className='w-full mt-16 flex items-center'>
            <Text className='text-4xl font-semibold pb-10'>Log In Your Account</Text>
          </View>

          <View className='w-full'>
            <View className='flex gap-4  flex-row w-full p-4 px-10 rounded-full text-2xl border-2 border-red-700  '>
              <MaterialCommunityIcons name="email" size={24} color="gray" />
              <TextInput className=' w-full text-xl items-center ' placeholder='Enter your Email' cursorColor={"transparent"} placeholderTextColor={"gray"} value={email} onChangeText={(text) => setEmail(text)} />
            </View>
            <View className='flex gap-4 mt-4 flex-row w-full p-4 px-10 rounded-full text-2xl border-2 border-red-700  '>
              <Feather name="lock" size={24} color="gray" />
              <TextInput className=' w-full text-xl items-center ' placeholder='Enter your Email' cursorColor={"transparent"} placeholderTextColor={"gray"}
                value={password} onChangeText={(text) => setPassword(text)} />

            </View>
          </View>

          <View className='mt-5 mx-4 flex-row items-center  justify-between'>
            <Text className='text-xl font-semibold'>Keep me Login</Text>
            <Text className=' text-red-700'>
              Forgot Password?
            </Text>
          </View>

          <Pressable onPress={handleLogin}>
            <View className='w-full mt-16 bg-red-700 p-4 rounded-full items-center'>
              <Text className='text-white text-xl font-semibold'>Login</Text>
            </View>
          </Pressable>


          <View className='w-full mt-16 flex-row items-center justify-center'>
            <Text className='text-xl font-semibold'>Don't have an account?</Text>
            <Pressable onPress={() => router.push("/(auth)/register")}>
              <Text className='text-red-700 text-xl font-semibold'> Register</Text>
            </Pressable>
          </View>

        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  )
}

export default login

const styles = StyleSheet.create({})