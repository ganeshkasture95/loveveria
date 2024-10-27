
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Image, KeyboardAvoidingView, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Register = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const router = useRouter()

  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };

    // send a POST  request to the backend API to register the user
    axios
      .post("http://10.0.2.2:3000/register", user)
      .then((response) => {
        console.log(response);
        Alert.alert(
          "Registration successful",
          "You have been registered Successfully"
        );
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        Alert.alert(
          "Registration Error",
          "An error occurred while registering"
        );
        console.log("registration failed", error);
      });


    router.push("/login")
  }

  

  return (
    <SafeAreaView>
      <View className='flex bg-white h-full w-full items-center'>

        <View className='blok items-center mt-14'>
          <Image source={require("p/public/assets/images/multilove.png")} className='w-60 h-60' />
          <Text className=' font-extrabold text-3xl ' >
            LoveLink
          </Text>
        </View>

        <KeyboardAvoidingView className='w-full px-10'>

          <View className='w-full mt-16 flex items-center'>
            <Text className='text-4xl font-semibold pb-10'>Create an Account</Text>
          </View>

          <View className='w-full'>
            <View className='flex gap-4 flex-row w-full p-4 px-10 rounded-full text-2xl border-2 border-red-700  '>
              <Ionicons name="person-sharp" size={24} color="gray" />
              <TextInput className=' w-full text-xl items-center ' placeholder='Enter Your Name' cursorColor={"transparent"} placeholderTextColor={"gray"}
                value={name} onChangeText={(text) => setName(text)} />
            </View>

            <View className='flex gap-4 mt-4 flex-row w-full p-4 px-10 rounded-full text-2xl border-2 border-red-700  '>
              <MaterialCommunityIcons name="email" size={24} color="gray" />
              <TextInput className=' w-full text-xl items-center ' placeholder='Enter your Email' cursorColor={"transparent"} placeholderTextColor={"gray"} value={email} onChangeText={(text) => setEmail(text)} />
            </View>

            <View className='flex gap-4 mt-4 flex-row w-full p-4 px-10 rounded-full text-2xl border-2 border-red-700  '>
              <Feather name="lock" size={24} color="gray" />
              <TextInput className=' w-full text-xl items-center ' placeholder='Enter your Password' cursorColor={"transparent"} placeholderTextColor={"gray"}
                value={password} onChangeText={(text) => setPassword(text)} />
            </View>

          </View>



          <Pressable onPress={handleRegister}>
            <View className='w-full mt-16 bg-red-700 p-4 rounded-full items-center'>
              <Text className='text-white text-xl font-semibold'>Register</Text>
            </View>
          </Pressable>


          <View className='w-full mt-2 flex-row items-center justify-center'>
            <Text className='text-xl font-semibold'>Have an account?</Text>
            <Pressable onPress={() => router.push("/(auth)/login")}>
              <Text className='text-red-700 text-xl font-semibold'> Login</Text>
            </Pressable>
          </View>

        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({});