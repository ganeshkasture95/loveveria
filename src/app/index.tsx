import { Redirect } from "expo-router";
import React from "react";
import { View } from "react-native";

export default function Page() {
  return (
    <View className="flex flex-1">
        <Redirect href={"/(auth)/login"}/>
    </View>
  );
}
